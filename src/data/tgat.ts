import { TgatData } from '@/types/tgat';

const VIDEO_BASE_URL = process.env.NEXT_PUBLIC_VIDEO_BASE_URL || '';

export const tgatData: Record<string, TgatData> = {
  'tgat-1': {
    slug: 'tgat-1',
    title: 'TGAT1',
    subjectName: 'การสื่อสารภาษาอังกฤษ',
    setNumber: '04',
    questionCount: '60 ข้อ',
    duration: '5 นาที 12 วินาที',
    video: `${VIDEO_BASE_URL}/videos/tgat-1.mp4`,
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
    title: 'TGAT2',
    subjectName: 'การคิดอย่างมีเหตุผล',
    setNumber: '04',
    questionCount: '80 ข้อ',
    duration: '5 นาที 12 วินาที',
    video: '/videos/tgat-2.mp4',
    poster: '',
    sections: [
      {
        title: '',
        items: [
          { label: 'ข้อ 61-80', description: 'ความสามารถทางภาษา', timestamp: 1, videoUrl: `${VIDEO_BASE_URL}/videos/tgat-2/ข้อ 61-80.mp4` },
          { label: 'ข้อ 81-100', description: 'ความสามารถทางตัวเลข', timestamp: 2, videoUrl: `${VIDEO_BASE_URL}/videos/tgat-2/ข้อ 81-100.mp4` },
          { label: 'ข้อ 101-120', description: 'ความสามารถทางมิติสัมพันธ์', timestamp: 3, videoUrl: `${VIDEO_BASE_URL}/videos/tgat-2/ข้อ 101-120.mp4` },
          { label: 'ข้อ 121-140', description: 'ความสามารถทางเหตุผล', timestamp: 4, videoUrl: `${VIDEO_BASE_URL}/videos/tgat-2/ข้อ 121-140.mp4` }
        ]
      }
    ]
  },
  'tgat-3': {
    slug: 'tgat-3',
    title: 'TGAT3',
    subjectName: 'สมรรถนะการทำงาน',
    setNumber: '04',
    questionCount: '60 ข้อ',
    duration: '5 นาที 12 วินาที',
    video: '/videos/tgat-3.mp4',
    poster: '',
    shopUrl: 'https://shopee.co.th/',
    sections: [
      {
        title: '',
        items: [
          { label: 'ข้อ 141-155', description: 'การสร้างคุณค่าและนวัตกรรม', timestamp: 1, videoUrl: `${VIDEO_BASE_URL}/videos/tgat-3/ข้อ 141-155.mp4` },
          { label: 'ข้อ 156-170', description: 'การแก้ไขปัญหาซับซ้อน', timestamp: 2, videoUrl: `${VIDEO_BASE_URL}/videos/tgat-3/ข้อ 156-170.mp4` },
          { label: 'ข้อ 171-185', description: 'การบริหารจัดการอารมณ์', timestamp: 3, videoUrl: `${VIDEO_BASE_URL}/videos/tgat-3/ข้อ 171-185.mp4` },
          { label: 'ข้อ 186-200', description: 'การเป็นพลเมืองดีที่มีส่วนร่วมต่อสังคม', timestamp: 4, videoUrl: `${VIDEO_BASE_URL}/videos/tgat-3/ข้อ 186-200.mp4` }
        ]
      },

    ]
  }
};
