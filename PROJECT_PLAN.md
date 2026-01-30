# خطة تنفيذ مشروع LARA - نظام إدارة تعليم إلكتروني (LMS)

## 📋 نظرة عامة على المشروع
نظام إدارة تعليم إلكتروني متكامل (Learning Management System) باسم **LARA** يحاكي منصات التعليم الإلكتروني الحقيقية مثل Udemy وCoursera. المشروع مخصص لأغراض جامعية ويشمل جميع المميزات الأساسية لمنصة تعليمية احترافية.

### 🎯 الهدف من المشروع
بناء منصة تعليمية شاملة تتيح للمدربين إنشاء وإدارة الكورسات، وللطلاب التسجيل في الكورسات والمشاركة في الكويزات مع تتبع النتائج والتقدم.

### 🌟 المميزات الرئيسية
1. **نظام المستخدمين**: تسجيل دخول، إنشاء حساب، إدارة الملف الشخصي
2. **إدارة الكورسات**: إنشاء، تعديل، عرض، وحذف الكورسات
3. **نظام الكويزات**: إنشاء كويزات مرتبطة بالكورسات مع أنواع أسئلة متعددة
4. **نظام الطلاب**: الالتحاق بالكورسات، دخول الكويزات، تتبع التقدم
5. **لوحات التحكم**: Dashboard للطلاب ولوحة للمدربين
6. **التقييمات والتقارير**: عرض النتائج، الإحصائيات، والشهادات

### ⚠️ ملاحظات هامة
- المشروع لأغراض تعليمية جامعية فقط
- لا يتضمن نظام دفع حقيقي
- الحماية الأمنية بمستوى أساسي (مناسب للبيئة الجامعية)
- الصور والمحتوى من مصادر مفتوحة (سيتم استبدالها لاحقاً)
- **الموقع بالكامل باللغة الإنجليزية** (جميع النصوص، الأزرار، الرسائل، والمحتوى)

---

## 🎯 المراحل التفصيلية للتنفيذ

### **المرحلة 1️⃣: إعداد البيئة والمشروع**

#### الخطوة 1.1: تثبيت Next.js
- ✅ تثبيت Next.js 16 مع TypeScript
- ✅ إعداد المشروع الأساسي
- ✅ التحقق من تشغيل المشروع بنجاح

#### الخطوة 1.2: تثبيت المكتبات الأساسية
```bash
# UI & Styling
npm install tailwindcss postcss autoprefixer
npm install react-icons lucide-react
npm install framer-motion
npm install clsx tailwind-merge

# State Management & Forms
npm install zustand
npm install react-hook-form
npm install zod

# Database & Authentication
npm install prisma @prisma/client
npm install next-auth@beta
npm install bcryptjs
npm install @types/bcryptjs -D

# UI Components
npm install @radix-ui/react-dialog
npm install @radix-ui/react-dropdown-menu
npm install @radix-ui/react-tabs
npm install @radix-ui/react-toast
npm install sonner

# Rich Text Editor
npm install @tiptap/react @tiptap/starter-kit

# Date & Time
npm install date-fns

# Charts & Analytics
npm install recharts
```

#### الخطوة 1.3: إعداد قاعدة البيانات
- [ ] تثبيت SQLite للبيئة المحلية
- [ ] إعداد Prisma Schema
- [ ] تعريف Models: User, Course, Lesson, Quiz, Question, Answer, Enrollment, Result
- [ ] إنشاء Migration الأولى
- [ ] إعداد Prisma Client

#### الخطوة 1.4: إعداد Tailwind CSS
- [ ] إنشاء ملف `tailwind.config.ts`
- [ ] إعداد `globals.css` مع الألوان المخصصة
- [ ] إضافة الـ gradient الرئيسي للمشروع
- [ ] إعداد Dark Mode (اختياري)

---

### **المرحلة 2️⃣: بناء البنية التحتية للمشروع**

#### الخطوة 2.1: إنشاء هيكل المجلدات الشامل
```
LARA/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (platform)/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── courses/
│   │   │   ├── page.tsx
│   │   │   ├── [courseId]/
│   │   │   │   ├── page.tsx
│   │   │   │   └── lessons/[lessonId]/page.tsx
│   │   │   └── create/page.tsx
│   │   ├── my-courses/
│   │   │   └── page.tsx
│   │   ├── quizzes/
│   │   │   ├── [quizId]/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── take/page.tsx
│   │   │   │   └── results/page.tsx
│   │   │   └── create/page.tsx
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (landing)/
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   └── layout.tsx
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth]/route.ts
│   │   ├── courses/
│   │   │   ├── route.ts
│   │   │   └── [courseId]/route.ts
│   │   ├── quizzes/
│   │   │   ├── route.ts
│   │   │   └── [quizId]/route.ts
│   │   ├── enrollments/
│   │   │   └── route.ts
│   │   └── results/
│   │       └── route.ts
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   ├── RegisterForm.tsx
│   │   └── AuthGuard.tsx
│   ├── courses/
│   │   ├── CourseCard.tsx
│   │   ├── CourseList.tsx
│   │   ├── CourseForm.tsx
│   │   ├── LessonList.tsx
│   │   ├── LessonForm.tsx
│   │   └── CoursePlayer.tsx
│   ├── quizzes/
│   │   ├── QuizCard.tsx
│   │   ├── QuizForm.tsx
│   │   ├── QuestionForm.tsx
│   │   ├── QuizTaker.tsx
│   │   └── ResultsDisplay.tsx
│   ├── dashboard/
│   │   ├── StatsCard.tsx
│   │   ├── RecentCourses.tsx
│   │   ├── ProgressChart.tsx
│   │   └── UpcomingQuizzes.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Toast.tsx
│   │   ├── Tabs.tsx
│   │   ├── Badge.tsx
│   │   └── Loading.tsx
│   └── shared/
│       ├── CategoryCard.tsx
│       ├── InstructorCard.tsx
│       ├── TestimonialCard.tsx
│       └── SearchBar.tsx
├── lib/
│   ├── prisma.ts
│   ├── auth.ts
│   ├── utils.ts
│   └── validators.ts
├── hooks/
│   ├── useAuth.ts
│   ├── useCourses.ts
│   ├── useQuizzes.ts
│   └── useEnrollments.ts
├── types/
│   ├── index.ts
│   ├── course.ts
│   ├── quiz.ts
│   └── user.ts
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
└── public/
    ├── images/
    │   ├── courses/
    │   ├── instructors/
    │   └── students/
    └── uploads/
```

#### الخطوة 2.2: إنشاء Prisma Schema
- [ ] تعريف User Model (id, name, email, password, role, image, createdAt)
- [ ] تعريف Course Model (id, title, description, instructor, category, level, image)
- [ ] تعريف Lesson Model (id, courseId, title, content, videoUrl, order)
- [ ] تعريف Quiz Model (id, courseId, title, description, duration, passingScore)
- [ ] تعريف Question Model (id, quizId, question, type, options, correctAnswer, points)
- [ ] تعريف Enrollment Model (id, userId, courseId, progress, enrolledAt)
- [ ] تعريف QuizResult Model (id, userId, quizId, score, answers, completedAt)
- [ ] تعريف Category Model (id, name, description, icon)
- [ ] إنشاء Relations بين الجداول

#### الخطوة 2.3: إنشاء TypeScript Types
- [ ] User types (Student, Instructor, Admin)
- [ ] Course types (CourseData, CreateCourseInput, UpdateCourseInput)
- [ ] Quiz types (QuizData, QuestionType, QuizSubmission)
- [ ] Enrollment types
- [ ] API Response types

---

### **المرحلة 3️⃣: نظام المصادقة والمستخدمين (Authentication)**

#### الخطوة 3.1: إعداد NextAuth.js
- [ ] إنشاء ملف `lib/auth.ts`
- [ ] إعداد Credentials Provider
- [ ] إنشاء API Route للمصادقة
- [ ] إعداد Session Strategy
- [ ] إنشاء Middleware للحماية

#### الخطوة 3.2: صفحة تسجيل الدخول (Login)
- [ ] إنشاء `app/(auth)/login/page.tsx`
- [ ] تصميم نموذج تسجيل الدخول
- [ ] إضافة حقول Email و Password
- [ ] Validation باستخدام Zod
- [ ] معالجة الأخطاء وعرض Toasts
- [ ] إضافة "Remember Me" و "Forgot Password"
- [ ] تحويل المستخدم بعد تسجيل الدخول

#### الخطوة 3.3: صفحة إنشاء حساب (Register)
- [ ] إنشاء `app/(auth)/register/page.tsx`
- [ ] تصميم نموذج التسجيل
- [ ] إضافة حقول: Name, Email, Password, Confirm Password, Role (Student/Instructor)
- [ ] Validation شامل
- [ ] تشفير كلمة المرور (bcrypt)
- [ ] إنشاء المستخدم في قاعدة البيانات
- [ ] إرسال رسالة ترحيبية
- [ ] تحويل للـ Login بعد النجاح

#### الخطوة 3.4: إنشاء مكونات المصادقة
- [ ] إنشاء `components/auth/LoginForm.tsx`
- [ ] إنشاء `components/auth/RegisterForm.tsx`
- [ ] إنشاء `components/auth/AuthGuard.tsx` (حماية الصفحات)
- [ ] إنشاء `hooks/useAuth.ts` للتعامل مع الـ Session

#### الخطوة 3.5: API Routes للمستخدمين
- [ ] `POST /api/auth/register` - إنشاء حساب جديد
- [ ] `POST /api/auth/login` - تسجيل دخول
- [ ] `GET /api/auth/session` - الحصول على معلومات المستخدم
- [ ] `PUT /api/users/profile` - تحديث الملف الشخصي
- [ ] `POST /api/auth/logout` - تسجيل خروج

---

### **المرحلة 4️⃣: Landing Page (الصفحة الرئيسية)**

#### الخطوة 4.1: إنشاء Navbar
- [ ] إنشاء `components/layout/Navbar.tsx`
- [ ] Logo "LARA"
- [ ] قائمة التنقل: Home, Courses, About, Contact
- [ ] Search Bar
- [ ] زر Login/Register (للزوار)
- [ ] User Dropdown Menu (للمستخدمين المسجلين):
  - Dashboard
  - My Courses
  - Profile
  - Logout
- [ ] Responsive Design (Hamburger Menu)

#### الخطوة 4.2: Hero Section
- [ ] إنشاء `components/landing/HeroSection.tsx`
- [ ] العنوان (بالإنجليزية): "Learn Smart, Grow Fast with LARA"
- [ ] الوصف: "Access courses tailored for your career and personal growth"
- [ ] CTA Buttons: "Browse Courses" + "Get Started"
- [ ] صورة تعليمية مع أيقونات عائمة
- [ ] تطبيق الـ Gradient الرئيسي

#### الخطوة 4.3: Categories Section
- [ ] إنشاء `components/landing/Categories.tsx`
- [ ] عنوان القسم: "Most Popular Categories"
- [ ] عرض التصنيفات الشائعة (6-8 تصنيفات) بالإنجليزية:
  - Machine Learning, AI, Web Development, Data Science, etc.
- [ ] CategoryCard مع الأيقونة، العدد، رابط
- [ ] Grid Layout متجاوب

#### الخطوة 4.4: Featured Courses Section
- [ ] إنشاء `components/landing/FeaturedCourses.tsx`
- [ ] عنوان القسم: "Featured Courses" أو "Top Courses"
- [ ] عرض أفضل 6 كورسات
- [ ] CourseCard يعرض: صورة، عنوان، مدرب، تقييم (بالإنجليزية)
- [ ] زر "View All Courses"

#### الخطوة 4.5: Instructors Section
- [ ] عنوان القسم: "Our Best Instructors" أو "Meet Our Instructors"
- [ ] عرض أفضل المدربين (أسماء بالإنجليزية)
- [ ] InstructorCard مع الصورة، الاسم، التخصص، عدد الكورسات
- [ ] أمثلة: "John Smith - Web Developer", "Sarah Johnson - Data Scientist"

#### الخطوة 4.6: Testimonials Section
- [ ] عنوان القسم: "Student Testimonials" أو "What Our Students Say"
- [ ] عرض تقييمات الطلاب (بالإنجليزية)
- [ ] Carousel/Slider للتقييمات
- [ ] TestimonialCard مع صورة، اسم، تقييم، نص التقييم بالإنجليزية

#### الخطوة 4.7: Footer
- [ ] معلومات المنصة (بالإنجليزية)
- [ ] أقسام: About LARA, Quick Links, Support, Contact
- [ ] روابط سريعة: Home, Courses, About Us, Contact, Terms, Privacy
- [ ] روابط التواصل الاجتماعي
- [ ] Copyright: "© 2026 LARA. All rights reserved."

---

### **المرحلة 5️⃣: نظام الكورسات (Courses System)**

#### الخطوة 5.1: صفحة عرض جميع الكورسات
- [ ] إنشاء `app/(platform)/courses/page.tsx`
- [ ] عرض جميع الكورسات في Grid
- [ ] نظام البحث والفلترة:
  - بحث بالاسم
  - فلتر بالتصنيف
  - فلتر بالمستوى (Beginner, Intermediate, Advanced)
  - فلتر بالمدرب
  - ترتيب (الأحدث، الأشهر، الأعلى تقييماً)
- [ ] Pagination

#### الخطوة 5.2: صفحة تفاصيل الكورس
- [ ] إنشاء `app/(platform)/courses/[courseId]/page.tsx`
- [ ] عرض معلومات الكورس الكاملة:
  - عنوان الكورس
  - وصف مفصل
  - صورة الكورس
  - معلومات المدرب
  - المستوى
  - عدد الدروس
  - المدة الإجمالية
  - التقييمات
  - الكويزات المرتبطة
- [ ] قائمة الدروس (Lessons)
- [ ] زر "Enroll Now" للطلاب
- [ ] زر "Edit Course" للمدربين (المالك فقط)

#### الخطوة 5.3: صفحة إنشاء كورس جديد (للمدربين فقط)
- [ ] إنشاء `app/(platform)/courses/create/page.tsx`
- [ ] نموذج إنشاء الكورس:
  - عنوان الكورس
  - وصف مختصر
  - وصف مفصل (Rich Text Editor)
  - التصنيف
  - المستوى
  - صورة الكورس (Upload)
  - Language
  - Requirements
- [ ] زر "Create Course"
- [ ] حماية الصفحة (للمدربين فقط)

#### الخطوة 5.4: صفحة تعديل الكورس
- [ ] إنشاء `app/(platform)/courses/[courseId]/edit/page.tsx`
- [ ] تحميل بيانات الكورس الحالية
- [ ] نموذج تعديل مماثل للإنشاء
- [ ] زر "Update Course" و "Delete Course"
- [ ] تأكيد قبل الحذف

#### الخطوة 5.5: إدارة الدروس (Lessons)
- [ ] إنشاء `components/courses/LessonForm.tsx`
- [ ] إضافة درس جديد:
  - عنوان الدرس
  - محتوى الدرس (Rich Text)
  - رابط الفيديو (YouTube/Vimeo embed أو Upload)
  - ترتيب الدرس
  - مدة الدرس
- [ ] تعديل الدرس
- [ ] حذف الدرس
- [ ] إعادة ترتيب الدروس (Drag & Drop)

#### الخطوة 5.6: صفحة مشاهدة الدرس
- [ ] إنشاء `app/(platform)/courses/[courseId]/lessons/[lessonId]/page.tsx`
- [ ] عرض الفيديو (Video Player)
- [ ] عرض محتوى الدرس
- [ ] قائمة جانبية بجميع الدروس
- [ ] زر "Next Lesson" و "Previous Lesson"
- [ ] زر "Mark as Complete"
- [ ] Progress Bar للكورس

#### الخطوة 5.7: API Routes للكورسات
- [ ] `GET /api/courses` - الحصول على جميع الكورسات
- [ ] `POST /api/courses` - إنشاء كورس جديد
- [ ] `GET /api/courses/[courseId]` - الحصول على كورس معين
- [ ] `PUT /api/courses/[courseId]` - تحديث كورس
- [ ] `DELETE /api/courses/[courseId]` - حذف كورس
- [ ] `GET /api/courses/[courseId]/lessons` - الحصول على دروس الكورس
- [ ] `POST /api/courses/[courseId]/lessons` - إضافة درس
- [ ] `PUT /api/lessons/[lessonId]` - تحديث درس
- [ ] `DELETE /api/lessons/[lessonId]` - حذف درس

---

### **المرحلة 6️⃣: نظام الالتحاق بالكورسات (Enrollment)**

#### الخطوة 6.1: صفحة "كورساتي" (My Courses)
- [ ] إنشاء `app/(platform)/my-courses/page.tsx`
- [ ] عرض جميع الكورسات الملتحق بها الطالب
- [ ] عرض Progress لكل كورس
- [ ] فلتر: All, In Progress, Completed
- [ ] زر "Continue Learning" لكل كورس

#### الخطوة 6.2: عملية الالتحاق بالكورس
- [ ] زر "Enroll" في صفحة تفاصيل الكورس
- [ ] Modal تأكيد الالتحاق
- [ ] إنشاء Enrollment في قاعدة البيانات
- [ ] تحويل الطالب لصفحة الكورس

#### الخطوة 6.3: تتبع التقدم (Progress Tracking)
- [ ] حساب نسبة الإنجاز (عدد الدروس المكتملة / إجمالي الدروس)
- [ ] تحديث Progress عند إكمال درس
- [ ] Progress Bar في صفحة الكورس
- [ ] Certificate عند إكمال 100%

#### الخطوة 6.4: API Routes للالتحاق
- [ ] `POST /api/enrollments` - الالتحاق بكورس
- [ ] `GET /api/enrollments/user` - كورسات المستخدم
- [ ] `PUT /api/enrollments/[enrollmentId]` - تحديث التقدم
- [ ] `GET /api/enrollments/[courseId]/students` - طلاب الكورس (للمدرب)

---

### **المرحلة 7️⃣: نظام الكويزات (Quizzes System)**

#### الخطوة 7.1: صفحة إنشاء كويز (للمدربين)
- [ ] إنشاء `app/(platform)/quizzes/create/page.tsx`
- [ ] نموذج إنشاء الكويز:
  - عنوان الكويز
  - وصف مختصر
  - ربط الكويز بكورس معين
  - المدة الزمنية (بالدقائق)
  - درجة النجاح (Passing Score %)
  - عدد المحاولات المسموحة
- [ ] إضافة أسئلة:
  - نص السؤال
  - نوع السؤال (Multiple Choice, True/False, Short Answer)
  - الخيارات (للأسئلة متعددة الاختيارات)
  - الإجابة الصحيحة
  - النقاط لكل سؤال
- [ ] زر "Add Question"
- [ ] زر "Save Quiz"

#### الخطوة 7.2: إنشاء مكون QuestionForm
- [ ] إنشاء `components/quizzes/QuestionForm.tsx`
- [ ] دعم أنواع الأسئلة المختلفة:
  - **Multiple Choice**: عدة خيارات مع إجابة واحدة صحيحة
  - **True/False**: صح أو خطأ
  - **Short Answer**: إجابة نصية قصيرة
- [ ] إضافة/حذف خيارات (للـ Multiple Choice)
- [ ] تحديد الإجابة الصحيحة
- [ ] تحديد نقاط السؤال

#### الخطوة 7.3: صفحة عرض تفاصيل الكويز
- [ ] إنشاء `app/(platform)/quizzes/[quizId]/page.tsx`
- [ ] عرض معلومات الكويز:
  - العنوان والوصف
  - الكورس المرتبط
  - عدد الأسئلة
  - المدة الزمنية
  - درجة النجاح
  - عدد المحاولات المتبقية
- [ ] زر "Start Quiz" للطلاب
- [ ] زر "Edit Quiz" للمدرب (المالك)
- [ ] عرض Previous Attempts

#### الخطوة 7.4: صفحة دخول الكويز (Quiz Taking)
- [ ] إنشاء `app/(platform)/quizzes/[quizId]/take/page.tsx`
- [ ] عرض الأسئلة واحداً تلو الآخر أو جميعها
- [ ] Timer للعد التنازلي
- [ ] إمكانية الانتقال بين الأسئلة
- [ ] حفظ الإجابات تلقائياً (Auto-save)
- [ ] زر "Submit Quiz"
- [ ] تأكيد قبل الإرسال
- [ ] منع الرجوع للخلف بعد الإرسال

#### الخطوة 7.5: صفحة نتائج الكويز
- [ ] إنشاء `app/(platform)/quizzes/[quizId]/results/page.tsx`
- [ ] عرض النتيجة الإجمالية (Score / Total)
- [ ] النسبة المئوية
- [ ] Pass/Fail Status
- [ ] عرض جميع الأسئلة مع:
  - السؤال
  - إجابة الطالب
  - الإجابة الصحيحة
  - صح/خطأ
  - النقاط المكتسبة
- [ ] الوقت المستغرق
- [ ] زر "Retake Quiz" (إذا كانت محاولات متبقية)
- [ ] زر "Back to Course"

#### الخطوة 7.6: حساب النتائج تلقائياً
- [ ] إنشاء دالة `calculateQuizResults()`
- [ ] مقارنة إجابات الطالب بالإجابات الصحيحة
- [ ] حساب النقاط لكل سؤال
- [ ] حساب المجموع الكلي
- [ ] حساب النسبة المئوية
- [ ] تحديد Pass/Fail
- [ ] حفظ النتيجة في قاعدة البيانات

#### الخطوة 7.7: API Routes للكويزات
- [ ] `POST /api/quizzes` - إنشاء كويز جديد
- [ ] `GET /api/quizzes/[quizId]` - الحصول على كويز
- [ ] `PUT /api/quizzes/[quizId]` - تحديث كويز
- [ ] `DELETE /api/quizzes/[quizId]` - حذف كويز
- [ ] `GET /api/quizzes/[quizId]/questions` - أسئلة الكويز
- [ ] `POST /api/quizzes/[quizId]/submit` - إرسال الكويز
- [ ] `GET /api/quizzes/[quizId]/results` - نتائج الطالب
- [ ] `GET /api/courses/[courseId]/quizzes` - كويزات الكورس

---

### **المرحلة 8️⃣: لوحة التحكم (Dashboard)**

#### الخطوة 8.1: Dashboard للطلاب
- [ ] إنشاء `app/(platform)/dashboard/page.tsx`
- [ ] بطاقات الإحصائيات:
  - عدد الكورسات الملتحقة
  - عدد الكورسات المكتملة
  - عدد الكويزات المكتملة
  - متوسط الدرجات
- [ ] قسم "Continue Learning" - الكورسات قيد الدراسة
- [ ] قسم "Upcoming Quizzes" - الكويزات القادمة
- [ ] Progress Chart - رسم بياني للتقدم
- [ ] Recent Activity

#### الخطوة 8.2: Dashboard للمدربين
- [ ] نفس الصفحة مع محتوى مختلف حسب الدور
- [ ] بطاقات الإحصائيات:
  - عدد الكورسات المنشأة
  - إجمالي الطلاب
  - عدد الكويزات
  - متوسط تقييم الكورسات
- [ ] قسم "My Courses" - الكورسات التي أنشأها
- [ ] قسم "Recent Enrollments" - آخر الالتحاقات
- [ ] Students Performance - أداء الطلاب
- [ ] زر سريع "Create New Course"

#### الخطوة 8.3: مكونات Dashboard
- [ ] إنشاء `components/dashboard/StatsCard.tsx`
- [ ] إنشاء `components/dashboard/ProgressChart.tsx` (باستخدام Recharts)
- [ ] إنشاء `components/dashboard/RecentCourses.tsx`
- [ ] إنشاء `components/dashboard/UpcomingQuizzes.tsx`

---

### **المرحلة 9️⃣: الملف الشخصي وإعدادات المستخدم**

#### الخطوة 9.1: صفحة الملف الشخصي
- [ ] إنشاء `app/(platform)/profile/page.tsx`
- [ ] عرض معلومات المستخدم:
  - الصورة الشخصية
  - الاسم
  - البريد الإلكتروني
  - الدور (Student/Instructor)
  - تاريخ الانضمام
  - Bio
- [ ] نموذج تعديل المعلومات
- [ ] رفع صورة شخصية
- [ ] تغيير كلمة المرور
- [ ] زر "Save Changes"

#### الخطوة 9.2: إنشاء ProfileForm Component
- [ ] إنشاء `components/profile/ProfileForm.tsx`
- [ ] حقول قابلة للتعديل
- [ ] Validation
- [ ] Preview للصورة الشخصية

#### الخطوة 9.3: API Routes للملف الشخصي
- [ ] `GET /api/users/profile` - الحصول على الملف الشخصي
- [ ] `PUT /api/users/profile` - تحديث المعلومات
- [ ] `POST /api/users/upload-avatar` - رفع صورة
- [ ] `PUT /api/users/change-password` - تغيير كلمة المرور

---

### **المرحلة 🔟: المميزات الإضافية**

#### الخطوة 10.1: نظام التقييمات (Ratings & Reviews)
- [ ] إضافة تقييم للكورس (1-5 نجوم)
- [ ] كتابة مراجعة نصية
- [ ] عرض متوسط التقييمات
- [ ] عرض جميع المراجعات
- [ ] Model: Review (id, userId, courseId, rating, comment, createdAt)

#### الخطوة 10.2: نظام الشهادات (Certificates)
- [ ] إنشاء `components/certificates/Certificate.tsx`
- [ ] تصميم شهادة احترافية
- [ ] إصدار الشهادة عند إكمال الكورس 100%
- [ ] إصدار الشهادة عند اجتياز جميع الكويزات
- [ ] زر "Download Certificate" (PDF)
- [ ] صفحة عرض الشهادات

#### الخطوة 10.3: نظام الإشعارات (Notifications)
- [ ] إشعار عند الالتحاق بكورس
- [ ] إشعار عند إضافة درس جديد
- [ ] إشعار عند إضافة كويز جديد
- [ ] إشعار عند نشر النتيجة
- [ ] Notification Bell في Navbar
- [ ] صفحة الإشعارات

#### الخطوة 10.4: نظام البحث المتقدم
- [ ] بحث عام في الموقع (Courses, Instructors)
- [ ] اقتراحات تلقائية (Auto-complete)
- [ ] نتائج البحث في صفحة منفصلة
- [ ] فلاتر متعددة

#### الخطوة 10.5: Bookmarks/Wishlist
- [ ] إضافة كورس للمفضلة
- [ ] صفحة "My Wishlist"
- [ ] Model: Bookmark (id, userId, courseId, createdAt)

---

### **المرحلة 1️⃣1️⃣: التصميم والواجهة (UI/UX)**

#### الخطوة 11.1: تطبيق الألوان والـ Theme
- [ ] إعداد Tailwind مع الألوان المخصصة:
  ```javascript
  colors: {
    primary: {
      orange: '#FFAE74',
      cream: '#FFF4B7',
      dark: '#FF8C42',
    },
    accent: '#4F46E5',
    success: '#10B981',
    warning: '#F59E0B',
    danger: '#EF4444',
  }
  ```
- [ ] إنشاء Custom Gradient Classes
- [ ] تطبيق Typography System
- [ ] تطبيق Spacing System

#### الخطوة 11.2: إنشاء UI Components مشتركة
- [ ] `components/ui/Button.tsx` - أزرار بأنماط متعددة
- [ ] `components/ui/Input.tsx` - حقول الإدخال
- [ ] `components/ui/Card.tsx` - بطاقات
- [ ] `components/ui/Modal.tsx` - نوافذ منبثقة
- [ ] `components/ui/Badge.tsx` - شارات
- [ ] `components/ui/Tabs.tsx` - تبويبات
- [ ] `components/ui/Loading.tsx` - شاشات التحميل
- [ ] `components/ui/Toast.tsx` - رسائل التنبيه

#### الخطوة 11.3: Animations & Transitions
- [ ] استخدام Framer Motion
- [ ] Fade In/Out للصفحات
- [ ] Slide In للـ Cards
- [ ] Hover Effects للأزرار والبطاقات
- [ ] Loading Animations
- [ ] Page Transitions

#### الخطوة 11.4: Responsive Design
- [ ] تصميم متجاوب لجميع الصفحات
- [ ] Mobile Menu (Hamburger)
- [ ] Tablet Layout
- [ ] Desktop Layout
- [ ] اختبار على أحجام شاشات مختلفة

---

### **المرحلة 1️⃣2️⃣: إدارة البيانات والصور**

#### الخطوة 12.1: إعداد مجلد الصور
- [ ] إنشاء `public/images/courses/`
- [ ] إنشاء `public/images/instructors/`
- [ ] إنشاء `public/images/students/`
- [ ] إنشاء `public/images/categories/`
- [ ] إضافة صور تجريبية من مصادر مفتوحة (Unsplash, Pexels)

#### الخطوة 12.2: نظام رفع الملفات (File Upload)
- [ ] إنشاء API Route للرفع: `/api/upload`
- [ ] دعم رفع الصور (Course images, Profile pictures)
- [ ] التحقق من نوع الملف وحجمه
- [ ] حفظ الملفات في `public/uploads/`
- [ ] إرجاع رابط الملف

#### الخطوة 12.3: إنشاء بيانات تجريبية (Seed Data)
- [ ] إنشاء `prisma/seed.ts`
- [ ] إضافة مستخدمين تجريبيين (طلاب ومدربين) - أسماء بالإنجليزية
- [ ] إضافة تصنيفات بالإنجليزية:
  - Web Development, Data Science, Machine Learning, AI, Cloud Computing, Mobile Development
- [ ] إضافة 10-15 كورس تجريبي (عناوين وأوصاف بالإنجليزية)
- [ ] إضافة دروس لكل كورس (محتوى بالإنجليزية)
- [ ] إضافة كويزات وأسئلة (بالإنجليزية)
- [ ] تشغيل Seed: `npx prisma db seed`

---

### **المرحلة 1️⃣3️⃣: الاختبار والتحسين**

#### الخطوة 13.1: Functionality Testing
- [ ] اختبار تسجيل الدخول والتسجيل
- [ ] اختبار إنشاء وتعديل الكورسات
- [ ] اختبار الالتحاق بالكورسات
- [ ] اختبار إنشاء ودخول الكويزات
- [ ] اختبار حساب النتائج
- [ ] اختبار Dashboard
- [ ] اختبار جميع الأزرار والروابط

#### الخطوة 13.2: User Experience Testing
- [ ] اختبار سهولة التنقل
- [ ] اختبار سرعة الاستجابة
- [ ] اختبار الرسائل التوضيحية
- [ ] اختبار معالجة الأخطاء

#### الخطوة 13.3: Responsive Testing
- [ ] اختبار على Mobile (375px - 767px)
- [ ] اختبار على Tablet (768px - 1023px)
- [ ] اختبار على Desktop (1024px+)
- [ ] اختبار على متصفحات مختلفة

#### الخطوة 13.4: Performance Optimization
- [ ] تحسين الصور (Next.js Image Component)
- [ ] Lazy Loading للمكونات
- [ ] تقليل حجم Bundle
- [ ] Code Splitting
- [ ] Lighthouse Audit

#### الخطوة 13.5: Security Testing
- [ ] التحقق من حماية الصفحات
- [ ] اختبار SQL Injection Prevention
- [ ] اختبار XSS Prevention
- [ ] التحقق من تشفير كلمات المرور
- [ ] اختبار Session Management

---

### **المرحلة 1️⃣4️⃣: التوثيق والنشر**

#### الخطوة 14.1: كتابة التوثيق
- [ ] تحديث README.md:
  - نظرة عامة على المشروع
  - المميزات الرئيسية
  - التقنيات المستخدمة
  - خطوات التثبيت
  - خطوات التشغيل
  - هيكل المشروع
  - Screenshots
- [ ] إنشاء USER_GUIDE.md (دليل المستخدم)
- [ ] إنشاء DEVELOPER_GUIDE.md (دليل المطور)
- [ ] توثيق API Routes

#### الخطوة 14.2: Code Cleanup
- [ ] حذف الأكواد غير المستخدمة
- [ ] تنظيم الـ Imports
- [ ] إضافة Comments للأكواد المعقدة
- [ ] التأكد من Code Formatting
- [ ] ESLint & Prettier

#### الخطوة 14.3: الإعداد للنشر
- [ ] إنشاء `.env.example`
- [ ] كتابة تعليمات البيئة
- [ ] إعداد قاعدة بيانات Production (PostgreSQL أو MySQL)
- [ ] تحديث Prisma Schema للـ Production

#### الخطوة 14.4: النشر (Deployment)
- [ ] Push إلى GitHub
- [ ] Deploy على Vercel:
  - ربط Repository
  - إضافة Environment Variables
  - إعداد Database Connection
  - Run Migrations
  - Deploy
- [ ] اختبار الموقع المنشور
- [ ] إعداد Domain مخصص (اختياري)

---

## 📊 Timeline المتوقع

| المرحلة | الوصف | الوقت المتوقع |
|---------|-------|---------------|
| 1 | إعداد البيئة والمشروع | 1-2 يوم |
| 2 | البنية التحتية وقاعدة البيانات | 1-2 يوم |
| 3 | نظام المصادقة | 2-3 أيام |
| 4 | Landing Page | 1-2 يوم |
| 5 | نظام الكورسات | 3-4 أيام |
| 6 | نظام الالتحاق | 1-2 يوم |
| 7 | نظام الكويزات | 3-4 أيام |
| 8 | لوحة التحكم | 2 يوم |
| 9 | الملف الشخصي | 1 يوم |
| 10 | المميزات الإضافية | 2-3 أيام |
| 11 | التصميم والواجهة | 2-3 أيام |
| 12 | إدارة البيانات والصور | 1-2 يوم |
| 13 | الاختبار والتحسين | 2-3 أيام |
| 14 | التوثيق والنشر | 1-2 يوم |
| **المجموع** | | **23-35 يوم** |

---

## 📋 Prisma Schema الكامل

```prisma
// schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite" // للبيئة المحلية، استخدم postgresql للـ production
  url      = env("DATABASE_URL")
}

model User {
  id            String       @id @default(cuid())
  name          String
  email         String       @unique
  password      String
  role          Role         @default(STUDENT)
  image         String?
  bio           String?
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
  
  // Relations
  coursesCreated Course[]     @relation("InstructorCourses")
  enrollments   Enrollment[]
  quizResults   QuizResult[]
  reviews       Review[]
  bookmarks     Bookmark[]
  notifications Notification[]
}

enum Role {
  STUDENT
  INSTRUCTOR
  ADMIN
}

model Category {
  id          String   @id @default(cuid())
  name        String   @unique
  description String?
  icon        String?
  courses     Course[]
  createdAt   DateTime @default(now())
}

model Course {
  id          String       @id @default(cuid())
  title       String
  slug        String       @unique
  description String
  content     String       @db.Text
  image       String?
  level       Level        @default(BEGINNER)
  language    String       @default("English")
  requirements String?
  isPublished Boolean      @default(false)
  createdAt   DateTime     @default(now())
  updatedAt   DateTime     @updatedAt
  
  // Relations
  instructorId String
  instructor   User         @relation("InstructorCourses", fields: [instructorId], references: [id], onDelete: Cascade)
  
  categoryId   String
  category     Category     @relation(fields: [categoryId], references: [id])
  
  lessons      Lesson[]
  quizzes      Quiz[]
  enrollments  Enrollment[]
  reviews      Review[]
  bookmarks    Bookmark[]
}

enum Level {
  BEGINNER
  INTERMEDIATE
  ADVANCED
}

model Lesson {
  id          String   @id @default(cuid())
  title       String
  content     String   @db.Text
  videoUrl    String?
  duration    Int?     // بالدقائق
  order       Int
  isPublished Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  courseId    String
  course      Course   @relation(fields: [courseId], references: [id], onDelete: Cascade)
  
  completions LessonCompletion[]
}

model LessonCompletion {
  id          String   @id @default(cuid())
  completedAt DateTime @default(now())
  
  lessonId    String
  lesson      Lesson   @relation(fields: [lessonId], references: [id], onDelete: Cascade)
  
  enrollmentId String
  enrollment   Enrollment @relation(fields: [enrollmentId], references: [id], onDelete: Cascade)
  
  @@unique([lessonId, enrollmentId])
}

model Enrollment {
  id          String    @id @default(cuid())
  progress    Float     @default(0) // 0-100
  enrolledAt  DateTime  @default(now())
  completedAt DateTime?
  
  userId      String
  user        User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  courseId    String
  course      Course    @relation(fields: [courseId], references: [id], onDelete: Cascade)
  
  completions LessonCompletion[]
  
  @@unique([userId, courseId])
}

model Quiz {
  id            String   @id @default(cuid())
  title         String
  description   String?
  duration      Int      // بالدقائق
  passingScore  Float    @default(70) // النسبة المئوية
  maxAttempts   Int      @default(3)
  isPublished   Boolean  @default(false)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  courseId      String
  course        Course   @relation(fields: [courseId], references: [id], onDelete: Cascade)
  
  questions     Question[]
  results       QuizResult[]
}

model Question {
  id            String       @id @default(cuid())
  question      String       @db.Text
  type          QuestionType
  options       String?      @db.Text // JSON array للخيارات
  correctAnswer String       @db.Text
  points        Int          @default(1)
  order         Int
  
  quizId        String
  quiz          Quiz         @relation(fields: [quizId], references: [id], onDelete: Cascade)
}

enum QuestionType {
  MULTIPLE_CHOICE
  TRUE_FALSE
  SHORT_ANSWER
}

model QuizResult {
  id          String   @id @default(cuid())
  score       Float    // الدرجة المكتسبة
  totalScore  Float    // الدرجة الكاملة
  percentage  Float    // النسبة المئوية
  passed      Boolean
  answers     String   @db.Text // JSON
  timeSpent   Int?     // بالدقائق
  completedAt DateTime @default(now())
  
  userId      String
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  quizId      String
  quiz        Quiz     @relation(fields: [quizId], references: [id], onDelete: Cascade)
}

model Review {
  id        String   @id @default(cuid())
  rating    Int      // 1-5
  comment   String?  @db.Text
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  courseId  String
  course    Course   @relation(fields: [courseId], references: [id], onDelete: Cascade)
  
  @@unique([userId, courseId])
}

model Bookmark {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  courseId  String
  course    Course   @relation(fields: [courseId], references: [id], onDelete: Cascade)
  
  @@unique([userId, courseId])
}

model Notification {
  id        String   @id @default(cuid())
  title     String
  message   String
  type      String
  isRead    Boolean  @default(false)
  createdAt DateTime @default(now())
  
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}
```

---

## 🎨 مرجع الألوان

```css
/* Primary Gradient */
background: linear-gradient(90.22deg, #FFAE74 -37.71%, #FFF4B7 99.81%);

/* Colors Palette */
--primary-orange: #FFAE74;
--primary-cream: #FFF4B7;
--primary-dark: #FF8C42;
--accent: #4F46E5;
--success: #10B981;
--warning: #F59E0B;
--danger: #EF4444;
--dark: #1A1A1A;
--gray-700: #374151;
--gray-500: #6B7280;
--gray-300: #D1D5DB;
--gray-100: #F3F4F6;
--white: #FFFFFF;
```

---

## 📚 المكتبات المستخدمة

### Core
1. **Next.js 16** - React Framework
2. **React 19** - UI Library
3. **TypeScript** - Type Safety
4. **Tailwind CSS 4** - Styling

### Database & ORM
5. **Prisma** - Database ORM
6. **SQLite** (Development) / **PostgreSQL** (Production)

### Authentication
7. **NextAuth.js** - Authentication
8. **bcryptjs** - Password Hashing

### State Management
9. **Zustand** - Global State Management

### Forms & Validation
10. **React Hook Form** - Form Management
11. **Zod** - Schema Validation

### UI Components
12. **Radix UI** - Headless UI Components
13. **Lucide React** - Icons
14. **Framer Motion** - Animations
15. **Sonner** - Toast Notifications

### Rich Text & Charts
16. **Tiptap** - Rich Text Editor
17. **Recharts** - Charts & Analytics

### Utilities
18. **date-fns** - Date Formatting
19. **clsx** & **tailwind-merge** - Utility Classes

---

## ✅ Checklist النهائي

### المرحلة 1: البنية التحتية
- [✅] تثبيت Next.js
- [ ] إعداد Prisma
- [ ] إعداد قاعدة البيانات
- [ ] إنشاء هيكل المجلدات
- [ ] تثبيت جميع المكتبات

### المرحلة 2: المصادقة
- [ ] إعداد NextAuth.js
- [ ] صفحة تسجيل الدخول
- [ ] صفحة إنشاء الحساب
- [ ] حماية الصفحات

### المرحلة 3: الكورسات
- [ ] نموذج إنشاء كورس
- [ ] صفحة عرض الكورسات
- [ ] صفحة تفاصيل الكورس
- [ ] إدارة الدروس
- [ ] نظام الالتحاق

### المرحلة 4: الكويزات
- [ ] نموذج إنشاء كويز
- [ ] إضافة أسئلة متعددة
- [ ] صفحة دخول الكويز
- [ ] حساب النتائج تلقائياً
- [ ] صفحة عرض النتائج

### المرحلة 5: Dashboard
- [ ] Dashboard الطلاب
- [ ] Dashboard المدربين
- [ ] الإحصائيات والرسوم البيانية

### المرحلة 6: المميزات الإضافية
- [ ] التقييمات والمراجعات
- [ ] الشهادات
- [ ] الإشعارات
- [ ] Wishlist

### المرحلة 7: التصميم
- [ ] تطبيق الألوان
- [ ] UI Components
- [ ] Animations
- [ ] Responsive Design

### المرحلة 8: الاختبار
- [ ] اختبار الوظائف
- [ ] اختبار الأداء
- [ ] اختبار الأمان
- [ ] اختبار Responsive

### المرحلة 9: النشر
- [ ] التوثيق
- [ ] Code Cleanup
- [ ] Deployment على Vercel

---

## 🎓 نصائح لنجاح المشروع

### للبرمجة
1. ابدأ بـ MVP (Minimum Viable Product) - الميزات الأساسية أولاً
2. اختبر كل ميزة بعد إنشائها مباشرة
3. استخدم Git بشكل منتظم (Commit بعد كل ميزة)
4. اكتب كود نظيف وقابل للصيانة
5. استخدم Components قابلة لإعادة الاستخدام

### للتصميم
1. التزم بـ Design System موحد
2. استخدم Spacing ثابت (4px, 8px, 16px, 24px, 32px)
3. اختر خطوط واضحة ومقروءة
4. اجعل الواجهة بديهية وسهلة الاستخدام
5. اختبر على أجهزة حقيقية

### للبيانات
1. ابدأ بـ Seed Data صغيرة
2. استخدم صور عالية الجودة
3. اكتب محتوى واقعي ومفيد
4. تأكد من تنوع البيانات

---

## 📝 ملاحظات نهائية

### ما يجب عدم القلق بشأنه (لأنه مشروع جامعي):
- ❌ نظام دفع حقيقي
- ❌ حماية أمنية متقدمة جداً
- ❌ Scalability للملايين من المستخدمين
- ❌ Load Balancing
- ❌ تحسينات SEO متقدمة

### ما يجب التركيز عليه:
- ✅ الوظائف الأساسية تعمل بشكل صحيح
- ✅ واجهة مستخدم نظيفة واحترافية
- ✅ تجربة مستخدم سلسة
- ✅ كود نظيف ومنظم
- ✅ توثيق جيد للمشروع
- ✅ عرض تقديمي احترافي

---

**Created:** January 30, 2026  
**Project:** LARA - Learning Management System  
**Version:** 2.0  
**Purpose:** University Project  
**License:** Educational Use Only


