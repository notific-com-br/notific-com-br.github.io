import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from '../components/cover-image';
import Link from 'next/link';

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <CoverImage title={title} coverImage={coverImage} slug={slug} />
      <div>
        <div>
          <h3>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a dangerouslySetInnerHTML={{ __html: title }} />
            </Link>
          </h3>
          <Date dateString={date} />
        </div>
        <div>
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <Avatar author={author} />
        </div>
      </div>
    </section>
  );
}
