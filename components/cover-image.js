import Link from 'next/link';

export default function CoverImage({ title, coverImage, slug }) {
  const image = (
    <img src={coverImage?.sourceUrl} style={{ maxWidth: '100%' }} />
  );
  return (
    <>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  );
}
