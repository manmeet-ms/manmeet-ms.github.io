import { Link2Icon } from 'lucide-react'

export const ProjectCard = (...item) => {
  
  return (
    <a
      key={item._id}
      className="thumbnail-shadow flex aspect-auto min-w-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-xl bg-white p-4 transition-colors duration-300 hover:bg-gray-100"
      href={`${item.link}?ref=manmeets.vercel.app`}
      target="_blank"
      rel="noopener noreferrer"
      // data-item-order={order}
    >
      <span className="aspect-[1200/630] overflow-hidden rounded-lg">
        <img
          src={item.cover || '/assets/fallback.avif'}
          alt={item.title}
          width={1200}
          height={630}
          // loading={order < 2 ? 'eager' : 'lazy'}
          className="aspect-[1200/630] animate-reveal rounded-lg border bg-cover bg-center bg-no-repeat object-cover"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = '/assets/fallback.avif'
          }}
          // eslint-disable-next-line react/no-unknown-property
          nopin="nopin"
        />
      </span>
      <div className="flex flex-col gap-1">
        <h2 className="line-clamp-4 text-lg leading-snug">{item.title}</h2>
        <span className="line-clamp-4 inline-flex items-center gap-1 text-sm text-gray-500">
          <Link2Icon size={16} />
          {item.domain}
        </span>
        <span className="line-clamp-6 text-sm">{item.excerpt || item.note}</span>
      </div>
    </a>
  )
}
