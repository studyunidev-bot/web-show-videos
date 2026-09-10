import { TgatData } from '@/types/tgat';

export const tgatData: Record<string, TgatData> = {
  'tgat-1': {
    slug: 'tgat-1',
    title: 'TGAT 1',
    subjectName: 'การสื่อสารภาษาอังกฤษ',
    setNumber: '04',
    questionCount: '60 ข้อ',
    duration: '10 วินาที (Mockup)',
    video: '/videos/tgat-1.mp4',
    poster: '',
    shopUrl: 'https://shopee.co.th/',
    sections: [
      {
        title: 'ส่วนที่ 1 : ทักษะการฟังและการพูด',
        subtitle: '',
        items: [
          { label: 'ข้อ 1-10', description: 'Question-Response', timestamp: 0 },
          { label: 'ข้อ 11-20', description: 'Short Conversations', timestamp: 3 },
          { label: 'ข้อ 21-30', description: 'Long Conversations', timestamp: 5 }
        ]
      },
      {
        title: 'ส่วนที่ 2 : ทักษะการอ่าน',
        subtitle: '',
        items: [
          { label: 'ข้อ 31-45', description: 'Text Completion', timestamp: 7 },
          { label: 'ข้อ 46-60', description: 'Reading Comprehension', timestamp: 9 }
        ]
      }
    ]
  },
  'tgat-2': {
    slug: 'tgat-2',
    title: 'TGAT 2',
    subjectName: 'การคิดอย่างมีเหตุผล',
    setNumber: '04',
    questionCount: '80 ข้อ',
    duration: '10 วินาที (Mockup)',
    video: '/videos/tgat-2.mp4',
    poster: '',
    sections: [
      {
        title: 'ส่วนที่ 1 : ความสามารถทางภาษา',
        items: [
          { label: 'ข้อ 1-20', description: 'การสื่อความหมาย', timestamp: 1 },
          { label: 'ข้อ 21-40', description: 'การใช้ภาษา', timestamp: 4 }
        ]
      },
      {
        title: 'ส่วนที่ 2 : ความสามารถทางตัวเลข',
        items: [
          { label: 'ข้อ 41-60', description: 'อนุกรมมิติ', timestamp: 7 },
          { label: 'ข้อ 61-80', description: 'มิติสัมพันธ์', timestamp: 9 }
        ]
      }
    ]
  },
  'tgat-3': {
    slug: 'tgat-3',
    title: 'TGAT 3',
    subjectName: 'สมรรถนะการทำงาน',
    setNumber: '04',
    questionCount: '60 ข้อ',
    duration: '10 วินาที (Mockup)',
    video: '/videos/tgat-3.mp4',
    poster: '',
    shopUrl: 'https://shopee.co.th/',
    sections: [
      {
        title: 'ส่วนที่ 1 : การสร้างคุณค่าและนวัตกรรม',
        items: [
          { label: 'ข้อ 1-15', description: 'การคิดเชิงวิพากษ์', timestamp: 2 },
          { label: 'ข้อ 16-30', description: 'การคิดเชิงนวัตกรรม', timestamp: 4 }
        ]
      },
      {
        title: 'ส่วนที่ 2 : การแก้ไขปัญหาซับซ้อน',
        items: [
          { label: 'ข้อ 31-45', description: 'การระบุปัญหา', timestamp: 6 },
          { label: 'ข้อ 46-60', description: 'การแสวงหาทางออก', timestamp: 8 }
        ]
      }
    ]
  }
};
