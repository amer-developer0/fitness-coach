# قوالب `<head>` — جميع النماذج

> انسخ الـ `<head>` المناسب كاملاً واستبدل الـ placeholders قبل الرفع.
> كل نموذج له favicon SVG مدمج (data URI) — لا ملفات خارجية.

---

## فهرس

| النموذج | اللون الأساسي | الأيقونة |
|---------|--------------|---------|
| `dark` | ذهبي `#d4a843` | 💪 dumbbell |
| `arab` | ذهبي `#d4a843` | 💪 dumbbell |
| `female` | وردي `#c97b6a` | 🌸 flower |
| `arab-female` | وردي `#c97b6a` | 🌸 flower |
| `medical` | أزرق `#2563a8` | 🩺 stethoscope |
| `premium` | ذهبي فاتح `#d4b978` | ◆ diamond |

---

---

## ١. dark.html

```html
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">

<!-- ══ PRIMARY META ══ -->
<title>برنامج التحول 90 يوم | [اسم المدرب]</title>
<meta name="description" content="تدريب شخصي أونلاين مع [اسم المدرب] — خطة مخصصة + متابعة يومية على واتساب + ضمان النتيجة أو ردّلك فلوسك. سجّل دلوقتي.">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://[رابط-الصفحة]/">

<!-- ══ OPEN GRAPH ══ -->
<meta property="og:type"        content="website">
<meta property="og:url"         content="https://[رابط-الصفحة]/">
<meta property="og:title"       content="برنامج التحول 90 يوم | [اسم المدرب]">
<meta property="og:description" content="[X]+ متدرب | [X]% نسبة رضا | ضمان استرداد 100% — ابدأ رحلتك مع [اسم المدرب] دلوقتي.">
<meta property="og:image"       content="https://[رابط-الصفحة]/og-cover.webp">
<meta property="og:image:width"  content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale"      content="ar_EG">
<meta property="og:site_name"   content="[اسم المدرب] — كوتش فيتنس أونلاين">

<!-- ══ TWITTER CARD ══ -->
<meta name="twitter:card"        content="summary_large_image">
<meta name="twitter:title"       content="برنامج التحول 90 يوم | [اسم المدرب]">
<meta name="twitter:description" content="[X]+ متدرب | ضمان النتيجة أو ردّلك فلوسك.">
<meta name="twitter:image"       content="https://[رابط-الصفحة]/og-cover.webp">

<!-- ══ FAVICON — SVG inline ══ -->
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='7' fill='%230a0a0a'/><text x='16' y='23' font-size='18' text-anchor='middle' fill='%23d4a843'>💪</text></svg>">

<!-- ══ SCHEMA.ORG ══ -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[اسم المدرب]",
  "jobTitle": "مدرب لياقة بدنية أونلاين",
  "description": "مدرب فيتنس أونلاين متخصص في برامج التحول الجسدي 90 يوم مع ضمان النتيجة.",
  "url": "https://[رابط-الصفحة]/",
  "image": "https://[رابط-الصفحة]/assets/img/trainer.webp",
  "sameAs": [
    "https://www.instagram.com/[handle]/",
    "https://www.tiktok.com/@[handle]/"
  ],
  "offers": {
    "@type": "Offer",
    "name": "برنامج التحول 90 يوم",
    "price": "[السعر]",
    "priceCurrency": "EGP",
    "availability": "https://schema.org/LimitedAvailability",
    "url": "https://[رابط-الصفحة]/"
  }
}
</script>

<!-- ══ FONTS ══ -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Noto+Kufi+Arabic:wght@400;600;700;900&display=swap" rel="stylesheet">
</head>
```

---

---

## ٢. arab.html

```html
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">

<!-- ══ PRIMARY META ══ -->
<title>برنامج التحول 90 يوماً | [اسم المدرب]</title>
<meta name="description" content="تدريب شخصي أونلاين مع [اسم المدرب] — خطة مخصصة + متابعة يومية عبر الواتساب + ضمان النتيجة أو نعيد إليك المبلغ. سجّل الآن.">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://[رابط-الصفحة]/">

<!-- ══ OPEN GRAPH ══ -->
<meta property="og:type"        content="website">
<meta property="og:url"         content="https://[رابط-الصفحة]/">
<meta property="og:title"       content="برنامج التحول 90 يوماً | [اسم المدرب]">
<meta property="og:description" content="[X]+ متدرب | [X]% نسبة رضا | ضمان استرداد 100% — ابدأ رحلتك مع [اسم المدرب] الآن.">
<meta property="og:image"       content="https://[رابط-الصفحة]/og-cover.webp">
<meta property="og:image:width"  content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale"      content="ar_SA">
<meta property="og:site_name"   content="[اسم المدرب] — مدرب لياقة أونلاين">

<!-- ══ TWITTER CARD ══ -->
<meta name="twitter:card"        content="summary_large_image">
<meta name="twitter:title"       content="برنامج التحول 90 يوماً | [اسم المدرب]">
<meta name="twitter:description" content="[X]+ متدرب | ضمان النتيجة أو نعيد إليك المبلغ.">
<meta name="twitter:image"       content="https://[رابط-الصفحة]/og-cover.webp">

<!-- ══ FAVICON — SVG inline ══ -->
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='7' fill='%230a0a0a'/><text x='16' y='23' font-size='18' text-anchor='middle' fill='%23d4a843'>💪</text></svg>">

<!-- ══ SCHEMA.ORG ══ -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[اسم المدرب]",
  "jobTitle": "مدرب لياقة بدنية أونلاين",
  "description": "مدرب لياقة أونلاين متخصص في برامج التحول الجسدي 90 يوماً مع ضمان النتيجة.",
  "url": "https://[رابط-الصفحة]/",
  "image": "https://[رابط-الصفحة]/assets/img/trainer.webp",
  "sameAs": [
    "https://www.instagram.com/[handle]/",
    "https://www.tiktok.com/@[handle]/"
  ],
  "offers": {
    "@type": "Offer",
    "name": "برنامج التحول 90 يوماً",
    "price": "[السعر]",
    "priceCurrency": "SAR",
    "availability": "https://schema.org/LimitedAvailability",
    "url": "https://[رابط-الصفحة]/"
  }
}
</script>

<!-- ══ FONTS ══ -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Noto+Kufi+Arabic:wght@400;600;700;900&display=swap" rel="stylesheet">
</head>
```

---

---

## ٣. female.html

```html
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">

<!-- ══ PRIMARY META ══ -->
<title>برنامج الرشاقة والثقة 90 يوم | [اسم المدربة]</title>
<meta name="description" content="مع [اسم المدربة] — خطة رشاقة مخصصة للسيدات + متابعة يومية + مجتمع بنات داعم. 90 يوم وتحسي بفرق حقيقي أو فلوسك ترجع.">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://[رابط-الصفحة]/">

<!-- ══ OPEN GRAPH ══ -->
<meta property="og:type"        content="website">
<meta property="og:url"         content="https://[رابط-الصفحة]/">
<meta property="og:title"       content="برنامج الرشاقة والثقة 90 يوم | [اسم المدربة]">
<meta property="og:description" content="[X]+ ست اتحولت | [X]% نسبة رضا — برنامج رشاقة مخصص للسيدات مع متابعة يومية وجروب دعم.">
<meta property="og:image"       content="https://[رابط-الصفحة]/og-cover.webp">
<meta property="og:image:width"  content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale"      content="ar_EG">
<meta property="og:site_name"   content="[اسم المدربة] — كوتشة فيتنس أونلاين">

<!-- ══ TWITTER CARD ══ -->
<meta name="twitter:card"        content="summary_large_image">
<meta name="twitter:title"       content="برنامج الرشاقة والثقة 90 يوم | [اسم المدربة]">
<meta name="twitter:description" content="[X]+ ست اتحولت | ضمان النتيجة أو ردّلك فلوسك.">
<meta name="twitter:image"       content="https://[رابط-الصفحة]/og-cover.webp">

<!-- ══ FAVICON — SVG inline ══ -->
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='7' fill='%23faf7f4'/><text x='16' y='23' font-size='18' text-anchor='middle' fill='%23c97b6a'>🌸</text></svg>">

<!-- ══ SCHEMA.ORG ══ -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[اسم المدربة]",
  "jobTitle": "مدربة لياقة ورشاقة للسيدات أونلاين",
  "description": "مدربة فيتنس أونلاين متخصصة في برامج الرشاقة والثقة للسيدات مع متابعة يومية وضمان النتيجة.",
  "url": "https://[رابط-الصفحة]/",
  "image": "https://[رابط-الصفحة]/assets/img/trainer.webp",
  "sameAs": [
    "https://www.instagram.com/[handle]/",
    "https://www.tiktok.com/@[handle]/"
  ],
  "offers": {
    "@type": "Offer",
    "name": "برنامج الرشاقة والثقة 90 يوم",
    "price": "[السعر]",
    "priceCurrency": "EGP",
    "availability": "https://schema.org/LimitedAvailability",
    "url": "https://[رابط-الصفحة]/"
  }
}
</script>

<!-- ══ FONTS ══ -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Noto+Kufi+Arabic:wght@400;600;700;900&display=swap" rel="stylesheet">
</head>
```

---

---

## ٤. arab-female.html

```html
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">

<!-- ══ PRIMARY META ══ -->
<title>برنامج الرشاقة والثقة 90 يوماً | [اسم المدربة]</title>
<meta name="description" content="مع [اسم المدربة] — خطة رشاقة مخصصة للسيدات + متابعة يومية + مجموعة دعم خاصة. 90 يوماً وستشعرين بفرق حقيقي أو نعيد إليكِ المبلغ كاملاً.">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://[رابط-الصفحة]/">

<!-- ══ OPEN GRAPH ══ -->
<meta property="og:type"        content="website">
<meta property="og:url"         content="https://[رابط-الصفحة]/">
<meta property="og:title"       content="برنامج الرشاقة والثقة 90 يوماً | [اسم المدربة]">
<meta property="og:description" content="[X]+ سيدة تحوّلت | [X]% نسبة رضا — برنامج رشاقة مخصص للسيدات مع متابعة يومية ومجموعة دعم.">
<meta property="og:image"       content="https://[رابط-الصفحة]/og-cover.webp">
<meta property="og:image:width"  content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale"      content="ar_SA">
<meta property="og:site_name"   content="[اسم المدربة] — مدربة لياقة أونلاين">

<!-- ══ TWITTER CARD ══ -->
<meta name="twitter:card"        content="summary_large_image">
<meta name="twitter:title"       content="برنامج الرشاقة والثقة 90 يوماً | [اسم المدربة]">
<meta name="twitter:description" content="[X]+ سيدة تحوّلت | ضمان النتيجة أو نعيد إليكِ المبلغ.">
<meta name="twitter:image"       content="https://[رابط-الصفحة]/og-cover.webp">

<!-- ══ FAVICON — SVG inline ══ -->
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='7' fill='%23faf7f4'/><text x='16' y='23' font-size='18' text-anchor='middle' fill='%23c97b6a'>🌸</text></svg>">

<!-- ══ SCHEMA.ORG ══ -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[اسم المدربة]",
  "jobTitle": "مدربة لياقة ورشاقة للسيدات أونلاين",
  "description": "مدربة لياقة أونلاين متخصصة في برامج الرشاقة والثقة للسيدات مع متابعة يومية وضمان النتيجة.",
  "url": "https://[رابط-الصفحة]/",
  "image": "https://[رابط-الصفحة]/assets/img/trainer.webp",
  "sameAs": [
    "https://www.instagram.com/[handle]/",
    "https://www.tiktok.com/@[handle]/"
  ],
  "offers": {
    "@type": "Offer",
    "name": "برنامج الرشاقة والثقة 90 يوماً",
    "price": "[السعر]",
    "priceCurrency": "SAR",
    "availability": "https://schema.org/LimitedAvailability",
    "url": "https://[رابط-الصفحة]/"
  }
}
</script>

<!-- ══ FONTS ══ -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Noto+Kufi+Arabic:wght@400;600;700;900&display=swap" rel="stylesheet">
</head>
```

---

---

## ٥. medical.html

```html
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">

<!-- ══ PRIMARY META ══ -->
<title>استشارة طبية متخصصة | [د. اسم الدكتور] — [التخصص]</title>
<meta name="description" content="[د. اسم الدكتور] — [التخصص]. بروتوكول علاجي مخصص + متابعة طبية دورية + تقييم شامل أونلاين. احجز استشارتك الآن.">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://[رابط-الصفحة]/">

<!-- ══ OPEN GRAPH ══ -->
<meta property="og:type"        content="website">
<meta property="og:url"         content="https://[رابط-الصفحة]/">
<meta property="og:title"       content="[د. اسم الدكتور] — [التخصص] | استشارة أونلاين">
<meta property="og:description" content="[X]+ حالة ناجحة | [X] سنوات خبرة طبية — بروتوكول علاجي مخصص مع متابعة دورية أونلاين.">
<meta property="og:image"       content="https://[رابط-الصفحة]/og-cover.webp">
<meta property="og:image:width"  content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale"      content="ar_EG">
<meta property="og:site_name"   content="[د. اسم الدكتور] — [التخصص]">

<!-- ══ TWITTER CARD ══ -->
<meta name="twitter:card"        content="summary_large_image">
<meta name="twitter:title"       content="[د. اسم الدكتور] — استشارة طبية متخصصة أونلاين">
<meta name="twitter:description" content="[X]+ حالة ناجحة | بروتوكول علاجي مخصص + متابعة دورية.">
<meta name="twitter:image"       content="https://[رابط-الصفحة]/og-cover.webp">

<!-- ══ FAVICON — SVG inline ══ -->
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='7' fill='%23ffffff' stroke='%23e4eaf0' stroke-width='1'/><text x='16' y='23' font-size='18' text-anchor='middle' fill='%232563a8'>🩺</text></svg>">

<!-- ══ SCHEMA.ORG ══ -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "[د. اسم الدكتور]",
  "medicalSpecialty": "[التخصص الطبي]",
  "description": "[د. اسم الدكتور] — [التخصص]. يقدم بروتوكولات علاجية مخصصة مع متابعة طبية دورية أونلاين.",
  "url": "https://[رابط-الصفحة]/",
  "image": "https://[رابط-الصفحة]/assets/img/trainer.webp",
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "[الشهادة الأولى]",
      "recognizedBy": { "@type": "Organization", "name": "[الجامعة / الجهة]" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "[الشهادة الثانية]",
      "recognizedBy": { "@type": "Organization", "name": "[الجهة المانحة]" }
    }
  ],
  "sameAs": [
    "https://www.instagram.com/[handle]/"
  ],
  "offers": {
    "@type": "Offer",
    "name": "البروتوكول الطبي المتخصص 90 يوماً",
    "price": "[السعر]",
    "priceCurrency": "EGP",
    "availability": "https://schema.org/LimitedAvailability",
    "url": "https://[رابط-الصفحة]/"
  }
}
</script>

<!-- ══ FONTS ══ -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Noto+Kufi+Arabic:wght@400;600;700;900&display=swap" rel="stylesheet">
</head>
```

---

---

## ٦. premium.html

```html
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">

<!-- ══ PRIMARY META ══ -->
<title>[اسم المدرب] — كوتشينج VIP | أماكن محدودة</title>
<meta name="description" content="[اسم المدرب] — كوتشينج VIP شخصي. [X] عملاء فقط شهرياً. وصول مباشر + متابعة أسبوعية مفصّلة + ضمان النتيجة. قدّم طلبك الآن.">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://[رابط-الصفحة]/">

<!-- ══ OPEN GRAPH ══ -->
<meta property="og:type"        content="website">
<meta property="og:url"         content="https://[رابط-الصفحة]/">
<meta property="og:title"       content="[اسم المدرب] — كوتشينج VIP | أماكن محدودة">
<meta property="og:description" content="[X]+ عميل VIP | [X]% نسبة نجاح | [X] أماكن متبقية فقط — كوتشينج شخصي بمتابعة مباشرة.">
<meta property="og:image"       content="https://[رابط-الصفحة]/og-cover.webp">
<meta property="og:image:width"  content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale"      content="ar_SA">
<meta property="og:site_name"   content="[اسم المدرب] — Elite Coaching">

<!-- ══ TWITTER CARD ══ -->
<meta name="twitter:card"        content="summary_large_image">
<meta name="twitter:title"       content="[اسم المدرب] — كوتشينج VIP">
<meta name="twitter:description" content="[X] أماكن فقط | وصول مباشر + ضمان النتيجة.">
<meta name="twitter:image"       content="https://[رابط-الصفحة]/og-cover.webp">

<!-- ══ FAVICON — SVG inline (diamond shape, gold on black) ══ -->
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='5' fill='%23080808'/><polygon points='16,5 27,13 16,27 5,13' fill='none' stroke='%23d4b978' stroke-width='1.5'/><polygon points='16,10 22,14 16,23 10,14' fill='%23d4b978' opacity='0.35'/></svg>">

<!-- ══ SCHEMA.ORG ══ -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[اسم المدرب]",
  "jobTitle": "مدرب لياقة VIP",
  "description": "[اسم المدرب] — كوتشينج VIP شخصي لعدد محدود من العملاء. [X] سنوات خبرة، [X]+ عميل، [X]% نسبة نجاح.",
  "url": "https://[رابط-الصفحة]/",
  "image": "https://[رابط-الصفحة]/assets/img/trainer.webp",
  "sameAs": [
    "https://www.instagram.com/[handle]/",
    "https://www.tiktok.com/@[handle]/"
  ],
  "offers": {
    "@type": "Offer",
    "name": "كوتشينج VIP الشخصي",
    "price": "[السعر]",
    "priceCurrency": "SAR",
    "availability": "https://schema.org/LimitedAvailability",
    "url": "https://[رابط-الصفحة]/"
  }
}
</script>

<!-- ══ FONTS ══ -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Almarai:wght@300;400;700&family=Noto+Kufi+Arabic:wght@300;400;700;900&display=swap" rel="stylesheet">
</head>
```

---

---

## ملاحظات مهمة

### og:image
كل نموذج يحتاج صورة `og-cover.webp` بمقاس **1200×630** في نفس مجلد الصفحة.
- للـ dark / arab: خلفية سوداء + اسم المدرب بالذهبي + إحصائية أو دو
- للـ female / arab-female: خلفية كريمي + اسم المدربة بالوردي
- للـ medical: خلفية بيضاء + اسم الدكتور بالأزرق + شهاداته
- للـ premium: خلفية سوداء عميقة + اسم المدرب بخط Cormorant ذهبي

### priceCurrency
| النموذج | العملة الافتراضية |
|---------|------------------|
| dark | EGP |
| arab | SAR (أو AED / KWD حسب العميل) |
| female | EGP |
| arab-female | SAR |
| medical | EGP |
| premium | SAR |

### Favicon
الـ favicons كلها SVG مدمجة كـ data URI — لا تحتاج ملفات خارجية.
للمتصفحات القديمة يمكن إضافة:
```html
<link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon-32.png">
```

### Schema Type المناسب
| النموذج | النوع |
|---------|-------|
| dark / arab / female / arab-female / premium | `Person` |
| medical | `Physician` |
