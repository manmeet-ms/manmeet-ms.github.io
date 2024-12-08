import { FolderIcon, FolderOpenIcon, Link2Icon } from 'lucide-react'

export const ProjectCard = ({link, cover, title, domain, excerpt, note,customIcon}) => {
  return (
    <a
      className="   flex aspect-auto min-w-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-xl bg-white p-4 transition-colors duration-300 hover:bg-gray-50"
      href={`${link || 'default'}?ref=manmeets.vercel.app`}
      target="_blank"
      rel="noopener noreferrer"
      // data-item-order={order}
    >
      <span className="aspect-[1200/630] overflow-hidden rounded-lg">
        <img
          src={cover || '/assets/fallback.avif'}
          alt={title || 'default'}
          width={1200}
          height={630}
          // loading={order < 2 ? 'eager' : 'lazy'}
          className="aspect-[1200/630] animate-reveal rounded-lg border bg-cover bg-center bg-no-repeat object-cover"
          // eslint-disable-next-line react/no-unknown-property
          nopin="nopin"
        />
      </span>
      <div className="flex flex-col gap-1">
        <h2 className="line-clamp-4 text-lg leading-snug">{title || 'default'}</h2>
        <span className="line-clamp-4 inline-flex items-center gap-1 text-sm text-gray-500">
          {link?<Link2Icon size={16} />:<FolderOpenIcon size={14}/>}
          {/* {customIcon?customIcon:<Link2Icon size={16} />} */}
          {domain || 'default'}
        </span>
        <span className="line-clamp-6 text-sm">{excerpt || 'default' || note || 'default'}</span>
      </div>
    </a>
  )
}
