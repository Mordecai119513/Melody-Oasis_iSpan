import React, { Component } from 'react'
import TabAlbumProductCard from '../tabAlbumProductCard/tabAlbumProductCard'
import styles from './tabs.module.scss'
import HomeAlbumProductCard2 from '../card-content/card-content2/card-content2'
import HomeAlbumProductCard4 from '../card-content/card-content4/card-content4'
import HomeAlbumProductCard5 from '../card-content/card-content5/card-content5'
import HomeAlbumProductCard6 from '../card-content/card-content6/card-content6'
import HomeAlbumProductCard7 from '../card-content/card-content7/card-content7'
import Link from 'next/link'
class VerticalTabs extends Component {
  state = {
    activeTab: 'v-pills-home',
  }

  setActiveTab = (tabId) => {
    this.setState({ activeTab: tabId })
  }

  render() {
    const { activeTab } = this.state

    return (
      <section className="py-1 header">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-3">
              <div
                className="nav flex-column nav-pills nav-pills-custom"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className={`nav-link mb-3 p-2 shadow ${
                    activeTab === 'v-pills-home' ? 'active' : ''
                  }`}
                  onClick={() => this.setActiveTab('v-pills-home')}
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected={activeTab === 'v-pills-home'}
                >
                  <i className="fa fa-user-circle-o mr-2"></i>
                  <span className="font-weight-bold small text-uppercase">
                    推薦專輯-1
                  </span>
                </a>
                <a
                  className={`nav-link mb-3 p-2 shadow ${
                    activeTab === 'v-pills-two' ? 'active' : ''
                  }`}
                  onClick={() => this.setActiveTab('v-pills-two')}
                  role="tab"
                  aria-controls="v-pills-two"
                  aria-selected={activeTab === 'v-pills-two'}
                >
                  <i className="fa fa-star mr-2"></i>
                  <span className="font-weight-bold small text-uppercase">
                    推薦專輯-2
                  </span>
                </a>
                <a
                  className={`nav-link mb-3 p-2 shadow ${
                    activeTab === 'v-pills-three' ? 'active' : ''
                  }`}
                  onClick={() => this.setActiveTab('v-pills-three')}
                  role="tab"
                  aria-controls="v-pills-three"
                  aria-selected={activeTab === 'v-pills-three'}
                >
                  <i className="fa fa-star mr-2"></i>
                  <span className="font-weight-bold small text-uppercase">
                    推薦專輯-3
                  </span>
                </a>
                <a
                  className={`nav-link mb-3 p-2 shadow ${
                    activeTab === 'v-pills-four' ? 'active' : ''
                  }`}
                  onClick={() => this.setActiveTab('v-pills-four')}
                  role="tab"
                  aria-controls="v-pills-four"
                  aria-selected={activeTab === 'v-pills-four'}
                >
                  <i className="fa fa-star mr-2"></i>
                  <span className="font-weight-bold small text-uppercase">
                    推薦專輯-4
                  </span>
                </a>
                <a
                  className={`nav-link mb-3 p-2 shadow ${
                    activeTab === 'v-pills-five' ? 'active' : ''
                  }`}
                  onClick={() => this.setActiveTab('v-pills-five')}
                  role="tab"
                  aria-controls="v-pills-five"
                  aria-selected={activeTab === 'v-pills-five'}
                >
                  <i className="fa fa-star mr-2"></i>
                  <span className="font-weight-bold small text-uppercase">
                    推薦專輯-5
                  </span>
                </a>
              </div>
            </div>
            <div className="col-9">
              <div className="tab-content">
                <div
                  className={`tab-pane show  ${
                    styles.albumProductCardContainer
                  } ${activeTab === 'v-pills-home' ? 'active' : ''}`}
                  role="tabpanel"
                >
                  <Link
                    href="http://localhost:3000/product/album/63"
                    style={{ textDecoration: 'none' }}
                  >
                    <HomeAlbumProductCard4 />
                  </Link>
                </div>
                <div
                  className={`tab-pane show  ${
                    styles.albumProductCardContainer
                  } ${activeTab === 'v-pills-two' ? 'active' : ''}`}
                  role="tabpanel"
                >
                  <Link
                    href="http://localhost:3000/product/album/69"
                    style={{ textDecoration: 'none' }}
                  >
                    <HomeAlbumProductCard5 />
                  </Link>
                </div>
                <div
                  className={`tab-pane show  ${
                    styles.albumProductCardContainer
                  } ${activeTab === 'v-pills-three' ? 'active' : ''}`}
                  role="tabpanel"
                >
                  <Link
                    href="http://localhost:3000/product/album/14"
                    style={{ textDecoration: 'none' }}
                  >
                    <HomeAlbumProductCard6 />
                  </Link>
                </div>
                <div
                  className={`tab-pane show  ${
                    styles.albumProductCardContainer
                  } ${activeTab === 'v-pills-four' ? 'active' : ''}`}
                  role="tabpanel"
                >
                  <Link
                    href="http://localhost:3000/product/album/64"
                    style={{ textDecoration: 'none' }}
                  >
                    <HomeAlbumProductCard7 />
                  </Link>
                </div>
                <div
                  className={`tab-pane show  ${
                    styles.albumProductCardContainer
                  } ${activeTab === 'v-pills-five' ? 'active' : ''}`}
                  role="tabpanel"
                >
                  <Link
                    href="http://localhost:3000/product/album/70"
                    style={{ textDecoration: 'none' }}
                  >
                    <HomeAlbumProductCard2 />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default VerticalTabs
