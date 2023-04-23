import Image from 'next/image'
import React from 'react'
import { navlogo, menu } from '../../public/assets'
import { Dropdown, Space } from 'antd';

const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

function Navbar() {
  return (
    // Creating round glassmorhpic navbar with round corners
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999 }}>
      <div className="flex justify-center px-7">
        <Image src={navlogo} alt="logo" width={100} height={100} className='mr-auto pointer-events-none ' />
        <nav className=" font-mono text-sm font-semibold navbar navbar-expand-lg navbar-light bg-white border-2 border-black rounded-full my-7 pl-4 px-1 flex max-sm:px-4 items-center ">
          <button className="ml-auto px-3 py-2 uppercase" > Home</button>
          <button className="ml-auto px-3 py-2 uppercase"> Team</button>
          <button className="ml-auto px-3 py-2 uppercase">Docs</button>
          <div className='bg-black text-white rounded-full flex pr-2'>
            <Dropdown className='ml-auto px-2 py-2'
              menu={{
                items,
              }}
              trigger={['click']}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Menu
                </Space>
              </a>
            </Dropdown>
            <Image src={menu} alt="logo" width={12} height={12} className='mr-auto' />
          </div>

        </nav>
        <button className="ml-auto py-3 uppercase text-white">Let's talk</button>
      </div>
    </div>

  )
}

export default Navbar