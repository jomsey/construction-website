'use client'
import 'photoswipe/dist/photoswipe.css'
import Image from 'next/image'
import { Gallery, Item } from 'react-photoswipe-gallery'

export default function PhotosSwiper({ images = [] }) {
    return (
        <section className="absolute z-20  left-4 bottom-4 w-full">
            <Gallery>
                <section className="grid grid-cols-3  gap-4  ">
                    {images.map(i => (
                        <Item original={i.url} thumbnail={i.url} width={i.width} height={i.height} >
                            {({ ref, open }) => (<Image alt=".." width={i.width} height={i.height} ref={ref} id={i.url} onClick={open} src={i.url} className="rounded-md border-white border-4" />)}
                        </Item>
                    ))}
                </section>
            </Gallery>
        </section>
    )
}
