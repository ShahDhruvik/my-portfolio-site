'use client'
import React, { useCallback, memo, useEffect, useState } from 'react'
import AI from '../axiosinstance'
import Arrow from '../assets/arrow.svg'
import Image from 'next/image'

type ImgDataType = {
  id: number
  attributes: {
    createdAt: string
    heading: string
    img_Link: string
    publishedAt: string
    updatedAt: string
  }
}

const ProjectItems = () => {
  const [imageData, setImageData] = useState<ImgDataType[]>([])
  const fetchDataImg = useCallback(async () => {
    try {
      const res = await AI.get('api/project-items')
      setImageData(res.data.data)
    } catch (error) {}
  }, [])
  useEffect(() => {
    fetchDataImg()
  }, [fetchDataImg])

  console.log('projectitems')
  return (
    <>
      {imageData?.map((item) => {
        {
          console.log(item.attributes.img_Link)
        }
        return (
          <div
            key={item.id}
            className=" snap-center p-4 inline-block hover:scale-105 max-w-[17rem] "
          >
            <div className="relative h-48 sm:h-60  aspect-square ">
              <Image
                src={item.attributes.img_Link}
                alt="mario"
                width={240}
                height={240}
                className="relative h-48 sm:h-60 lg:68 aspect-square "
              />
            </div>
            <div
              role="button"
              className="flex  text-black bg-gray-300 px-3 py-2"
            >
              <h3 className=" uppercase flex-1 text-left text-ellipsis overflow-hidden ">
                {item.attributes.heading}
              </h3>

              <Arrow className=" content-end" />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default memo(ProjectItems)
