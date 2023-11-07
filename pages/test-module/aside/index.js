import React from 'react'
//
import AsideWrapSet from '@/components/common/aside/aside-wrap-set'
//
import OffcanvasRightButton from '@/components/common/aside/offcanvas-right-button'
//
import AsideContent from '@/components/common/aside/aside-content'
//
import AlbumCatagory from '@/components/common/aside/album/album-catagory'
//
import Collect from '@/components/common/aside/common/collect'

export default function Example() {
  return (
    <>
      <div className="container-fluid">
        <OffcanvasRightButton>
          <AsideContent
            type={'商品'}
            subtitle={'語系'}
            choice={['西洋', '華語', '日語']}
          ></AsideContent>
        </OffcanvasRightButton>
        <div className="row">
          <AsideWrapSet>
            <AsideContent
              type={'商品'}
              subtitle={'語系'}
              choice={['西洋', '華語', '日語', '123']}
              genreDivPosition={
                <AlbumCatagory
                  subtitle="曲風"
                  genre={['搖滾音樂', '流行音樂', '鄉村音樂', '嘻哈音樂']}
                />
              }
              collectDivPosition={<Collect />}
            ></AsideContent>
          </AsideWrapSet>
          <div className="col-9 bg-danger">right part</div>
        </div>
      </div>
    </>
  )
}
