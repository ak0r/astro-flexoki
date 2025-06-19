export async function loadGalleryImages(postID: string) {
  // 1. List all gallery files from collections path
  let allImages = import.meta.glob<{ default: ImageMetadata }>(
    "/src/**/*.{jpeg,jpg}"
  );

  // 2. Filter images by postID
  allImages = Object.fromEntries(
    Object.entries(allImages).filter(([key]) => key.includes(postID))
  );

  // 3. Images are promises, so we need to resolve the glob promises
  const resolvedImages = await Promise.all(
    Object.values(allImages).map((image) => image().then((mod) => mod.default))
  );

  // 4. Shuffle images in random order
  resolvedImages.sort(() => Math.random() - 0.5);
  return resolvedImages;
}