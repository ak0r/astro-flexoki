import { getCollection, render } from 'astro:content'
import type { CollectionEntry, CollectionKey } from 'astro:content'

type CollectionEntryList<K extends CollectionKey = CollectionKey> =
  CollectionEntry<K>[]

  /**
 * Retrieves filtered posts from the specified content collection.
 * In production, it filters out draft posts.
 */
export async function getFilteredPosts(collection: 'blog' | 'notes') {
  return await getCollection(collection, ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true
  })
}

/**
 * Sorts an array of posts by their publication date in descending order.
 */
export function getSortedPosts(
  posts: CollectionEntryList<'blog' | 'notes'>
) {
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  )
}

// Below functions are from personal theme

/** filter out draft posts based on the environment */
export async function getAllPosts(): Promise<CollectionEntry<"blog">[]> {
	return await getCollection("blog", ({ data }) => {
		return import.meta.env.PROD ? !data.draft : true;
	});
}

/** groups posts by year (based on option siteConfig.sortPostsByUpdatedDate), using the year as the key
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 */
export function groupPostsByYear(posts: CollectionEntry<"blog">[]) {
	return posts.reduce<Record<string, CollectionEntry<"blog">[]>>((acc, post) => {
		const year = post.data.publishedDate.getFullYear();
		if (!acc[year]) {
			acc[year] = [];
		}
		acc[year]?.push(post);
		return acc;
	}, {});
}

/** returns all tags created from posts (inc duplicate tags)
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getAllTags(posts: CollectionEntry<"blog">[]) {
	return posts.flatMap((post) => [...post.data.tags]);
}

/** returns all unique tags created from posts
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getUniqueTags(posts: CollectionEntry<"blog">[]) {
	return [...new Set(getAllTags(posts))];
}

/** returns a count of each unique tag - [[tagName, count], ...]
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getUniqueTagsWithCount(posts: CollectionEntry<"blog">[]): [string, number][] {
	return [
		...getAllTags(posts).reduce(
			(acc, t) => acc.set(t, (acc.get(t) ?? 0) + 1),
			new Map<string, number>(),
		),
	].sort((a, b) => b[1] - a[1]);
}