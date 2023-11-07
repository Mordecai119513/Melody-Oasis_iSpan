import React, { useState } from 'react'
import { ConfigProvider, Progress, Space } from 'antd'

export default function ScoreBar({ percent }) {
  return (
    <>
      <div>
        {/* bar */}
        <div style={{ marginInline: '10px', flex: 1 }}>
          <ConfigProvider
            theme={{
              token: {
                motionDurationSlow: '4s',
              },
            }}
          >
            <Progress
              percent={percent}
              size={['', 13]}
              showInfo={false}
              strokeColor={'#C6AC8F'}
              trailColor={'#5E503F'}
              style={{ width: '100%' }}
            />
          </ConfigProvider>
        </div>
      </div>
    </>
  )
}
