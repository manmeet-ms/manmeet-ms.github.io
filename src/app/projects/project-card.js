import { FolderIcon, FolderOpenIcon, Link2Icon } from 'lucide-react'

export const ProjectCard = ({ link, cover, title, tags, domain, excerpt, note, customIcon }, index) => {
  return (
    <>
      <div key={index} className="w-full p-4 md:w-1/2 ">
        <a
          // className="   flex aspect-auto min-w-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-xl bg-white p-4 transition-colors duration-300 hover:bg-gray-50"
          href={`${link}?ref=manmeets.vercel.app`}
          target="_blank"
          rel="noopener noreferrer"
          // data-item-order={order}
        >
          <div className="rounded-lg  p-4 border bg-muted/20">
            <img className="mb-4 h-40 w-full rounded object-cover object-top  " src={cover} alt={title} />
            <h3 className="inline-flex items-center gap-1 text-xs font-medium tracking-normal text-primary">
              {domain.includes('.') ? <Link2Icon size={14} strokeWidth={2.25} /> : (customIcon||(<FolderIcon size={13} strokeWidth={2.25} />))}

              <span className="font-medium ">{domain}</span>
            </h3>
            <h2 className="title-font mb-2 text-lg font-medium text-gray-900 capitalize">{title}</h2>
            <p className="text-base leading-relaxed">{excerpt || note}</p>
            <div className="mb-2 flex flex-wrap gap-1 ">
              {tags
                ? tags.map((item, idx) => (
                    <span key={idx} className="capitalize rounded-md bg-primary/20 px-2 py-1 text-xs font-medium tracking-[0.25px] text-primary">
                      {/* <code>#{item.replace(' ', '_').toLowerCase()}</code> */}
                      {item}
                    </span>
                  ))
                : null}
            </div>
          </div>
        </a>
      </div>
    </>
    //   <a
    //   className="  border flex aspect-auto min-w-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-xl bg-white p-4 transition-colors duration-300 hover:bg-gray-50"
    //   href={`${link || 'default'}?ref=manmeets.vercel.app`}
    //   target="_blank"
    //   rel="noopener noreferrer"
    //   // data-item-order={order}
    // >

    //   <span className="aspect-[1200/630] overflow-hidden rounded-lg">
    //     <img
    //       src={cover || '/assets/fallback.avif'}
    //       alt={title || 'default'}
    //       width={1200}
    //       height={630}
    //       // loading={order < 2 ? 'eager' : 'lazy'}
    //       className="aspect-[1200/630] animate-reveal rounded-lg border bg-cover bg-center bg-no-repeat object-cover"
    //       // eslint-disable-next-line react/no-unknown-property
    //       nopin="nopin"
    //     />
    //   </span>
    //   <div className="flex flex-col gap-1">
    //     <h2 className="line-clamp-4 text-lg leading-snug">{title || 'default'}</h2>
    //     <span className="line-clamp-4 inline-flex items-center gap-1 text-sm text-gray-500">
    //       {link?<Link2Icon size={16} />:<FolderOpenIcon size={14}/>}
    //       {/* {customIcon?customIcon:<Link2Icon size={16} />} */}
    //       {domain || 'default'}
    //     </span>
    //     <span className="line-clamp-6 text-sm">{excerpt || 'default' || note || 'default'}</span>
    //   </div>
    // </a>
  )
}
