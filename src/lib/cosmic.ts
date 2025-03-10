import Cosmic from 'cosmicjs'
const api = Cosmic();

const bucket = api.bucket({
  slug: import.meta.env.PUBLIC_COSMIC_BUCKET_SLUG,
  read_key: import.meta.env.PUBLIC_COSMIC_READ_KEY,
}); 

export async function getAllPosts() {
  const data = await bucket.objects
    .find({
      type: "posts",
    })
    .props("title,slug,metadata,thumbnail,content,modified_at")
  
  return data.objects;
}

export async function getPostBySlug(slug) {
  const data = await bucket.objects
  .find({slug})
  .props("title,slug,metadata,thumbnail,modified_at,content")

  return data.object;
}