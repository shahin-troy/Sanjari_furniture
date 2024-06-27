import { Tabs } from "antd"

const items = [
    {
      key: '1',
      label: 'مبل',
      children: 'تب مبلمان',
    },
    {
      key: '2',
      label: 'تخت',
      children: 'تب تخت ها',
    },
    {
      key: '3',
      label: 'صندلی',
      children: 'تب صندلی',
    },
  ];

export default function Tab() {
  return (
    <div className="bg-slate-200 !font-Vazir w-[97%] mx-auto mt-8 mb-40 px-9 rounded-xl h-40 ">
    <Tabs defaultActiveKey="1"  type="card" centered items={items}  />
    </div>
  )
}
