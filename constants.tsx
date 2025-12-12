import React from 'react';
import { Section, SectionType } from './types';
import { 
  Star, 
  Heart, 
  BookOpen, 
  Users, 
  ShieldAlert, 
  Flower2, 
  ScrollText,
  Moon,
  Baby
} from 'lucide-react';

export const APP_DATA: Section[] = [
  {
    id: SectionType.NAMES,
    title: "الاسم والألقاب",
    description: "لها تسعة أسماء عند الله، ولها ألقاب تدل على عظيم منزلتها.",
    branches: [
      {
        id: 'names-1',
        title: "الزهراء",
        icon: <Star className="w-6 h-6" />,
        points: [
          { text: "لأنها تزهر لأهل السماء كما تزهر النجوم لأهل الأرض" },
          { text: "زهرت السماوات والأرضون السبع بنورها" }
        ]
      },
      {
        id: 'names-2',
        title: "البتول",
        icon: <Flower2 className="w-6 h-6" />,
        points: [
          { text: "انقطعت عن نساء زمانها فضلاً وديناً وحسباً" },
          { text: "تتبتل في العبادة وتنقطع إلى الله" }
        ]
      },
      {
        id: 'names-3',
        title: "الصديقة",
        icon: <ScrollText className="w-6 h-6" />,
        points: [
          { text: "الكاملة في الصدق التي لم تكذب قط" },
          { text: "صدقت بما جاء به أبوها تصديقاً كاملاً" }
        ]
      }
    ]
  },
  {
    id: SectionType.STATUS,
    title: "التعريف والمكانة",
    description: "مكانتها عند الله ورسوله لا تضاهيها مكانة امرأة أخرى.",
    branches: [
      {
        id: 'status-1',
        title: "وجه تسميتها (فاطمة)",
        icon: <ShieldAlert className="w-6 h-6" />,
        points: [
          { text: "فطمت شيعتها من النار" },
          { text: "فُطمت هي وشيعتها من الشر" },
          { text: "الخلق فطموا عن معرفتها الحقيقية" }
        ]
      },
      {
        id: 'status-2',
        title: "مكانتها عند الرسول (ص)",
        icon: <Heart className="w-6 h-6" />,
        points: [
          { text: "بضعة مني (يؤذيني ما آذاها)" },
          { text: "أم أبيها" },
          { text: "سيدة نساء العالمين (الأولين والآخرين)" },
          { text: "روحي التي بين جنبي" }
        ]
      },
      {
        id: 'status-3',
        title: "القرآن الكريم",
        icon: <BookOpen className="w-6 h-6" />,
        points: [
          { text: "آية التطهير (إنما يريد الله ليذهب عنكم الرجس...)" },
          { text: "آية المباهلة (ونساءنا ونساءكم)" },
          { text: "سورة الكوثر (إنا أعطيناك الكوثر)" }
        ]
      }
    ]
  },
  {
    id: SectionType.LIFE,
    title: "حياتها ونشأتها",
    description: "ولدت من تفاحة الفردوس ونشأت في بيت الوحي.",
    branches: [
      {
        id: 'life-1',
        title: "الولادة والطفولة",
        icon: <Baby className="w-6 h-6" />,
        points: [
          { text: "انعقدت نطفتها من ثمار الجنة التي تناولها النبي (ص) في المعراج" },
          { text: "نشأت في بيت الوحي وتربية الرسول" },
          { text: "عانت من مآسي الطفولة (شعب أبي طالب)" }
        ]
      },
      {
        id: 'life-2',
        title: "الدور في الغزوات",
        icon: <ShieldAlert className="w-6 h-6" />,
        points: [
          { text: "عالجت جراحة الرسول (ص) في أحد" },
          { text: "كانت تمسح الدم عن وجه أبيها" }
        ]
      }
    ]
  },
  {
    id: SectionType.MARRIAGE,
    title: "الزواج والحياة الزوجية",
    description: "زواج النور من النور بأمر من السماء.",
    branches: [
      {
        id: 'marriage-1',
        title: "الزواج المبارك",
        icon: <Users className="w-6 h-6" />,
        points: [
          { text: "الزوج: علي بن أبي طالب (ع)" },
          { text: "المهر: درع حطمية (مهر السنة)" },
          { text: "أمر الزواج نزل من السماء" },
          { text: "البيت: مجاور لمسجد الرسول (ص)" }
        ]
      },
      {
        id: 'marriage-2',
        title: "الأولاد (الأقمار)",
        icon: <Users className="w-6 h-6" />,
        points: [
          { text: "الإمام الحسن المجتبى (ع)" },
          { text: "الإمام الحسين الشهيد (ع)" },
          { text: "زينب الكبرى (ع)" },
          { text: "أم كلثوم" },
          { text: "المحسن (السقط الشهيد)" }
        ]
      }
    ]
  },
  {
    id: SectionType.AFTERMATH,
    title: "المظلومية والأحداث",
    description: "ما جرى عليها بعد رحيل أبيها رسول الله (ص).",
    branches: [
      {
        id: 'grief-1',
        title: "بعد وفاة الرسول",
        icon: <Moon className="w-6 h-6" />,
        points: [
          { text: "غصب حق زوجها في الخلافة" },
          { text: "مصادرة فدك (نحلة الرسول لها)" },
          { text: "الهجوم على الدار وإحراق الباب" },
          { text: "كسر الضلع وإسقاط الجنين" }
        ]
      },
      {
        id: 'grief-2',
        title: "الحزن والبكاء",
        icon: <ScrollText className="w-6 h-6" />,
        points: [
          { text: "بيت الأحزان" },
          { text: "خطبتها الفدكية في المسجد" }
        ]
      }
    ]
  },
  {
    id: SectionType.MARTYRDOM,
    title: "الشهادة والدفن",
    description: "رحلت غاضبة على القوم، ودفنت سراً.",
    branches: [
      {
        id: 'death-1',
        title: "الاستشهاد",
        icon: <Flower2 className="w-6 h-6" />,
        points: [
          { text: "استشهدت متأثرة بجراحها" },
          { text: "الروايات: 75 يوماً أو 95 يوماً بعد وفاة النبي (الأيام الفاطمية)" },
          { text: "عمرها الشريف: 18 سنة على المشهور" }
        ]
      },
      {
        id: 'death-2',
        title: "الدفن",
        icon: <Moon className="w-6 h-6" />,
        points: [
          { text: "أوصت أن تدفن ليلاً وسراً" },
          { text: "عفّت موضع قبرها (لا يُعرف إلى اليوم)" },
          { text: "صلى عليها علي (ع) والخواص فقط" }
        ]
      }
    ]
  }
];