<script setup lang="ts"></script>

<template>
  <main class="flex flex-col items-center justify-center px-4 md:px-8 lg:px-20 my-20">
    <h1 class="text-heading-48 font-semibold mb-2">ติดต่อเรา</h1>
    <div class="h-1 w-16 bg-primary mb-10 rounded-full"></div>

    <!-- Google Map -->
    <div class="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg mb-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.7012295846553!2d99.44409251071725!3d18.223648382741587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d971562215bcdb%3A0x2308a4368d1f928d!2z4LiB4Li44LmJ4LiH4Lij4Lix4Lia4LiL4Li34LmJ4Lit4LiC4Lit4LiH4LmA4LiB4LmI4Liy!5e0!3m2!1sth!2sth!4v1748246956131!5m2!1sth!2sth"
        class="absolute top-0 left-0 w-full h-full border-0"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <!-- Contact -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
      <div>
        <h4 class="text-heading-28 font-semibold mb-6">รายละเอียดการติดต่อ</h4>
        <ul class="space-y-4 text-base leading-relaxed">
          <li><strong>เวลาทำการ: </strong> จันทร์ - เสาร์ 08:00 - 17:00 น.</li>
          <li>
            <strong>โทร: </strong> <a href="tel:0814739917" class="hover:underline">081-473-9917</a>
          </li>
          <li>
            <strong>Line: </strong>
            <a href="https://line.me/ti/p/~0814739917" target="_blank" class="hover:underline"
              >081-473-9917</a
            >
          </li>
          <li>
            <strong>Facebook: </strong>
            <a href="https://facebook.com" target="_blank" class="hover:underline"
              >กุ้งรับซื้อของเก่าลำปาง</a
            >
          </li>
        </ul>
      </div>

      <!-- ยังไม่มี Facebook Embed -->
      <div
        class="bg-primary-gray h-60 w-full flex items-center justify-center rounded-xl shadow-inner"
      >
        <p class="text-center text-gray-600">Facebook Page (กำลังมาเร็ว ๆ นี้)</p>
      </div>
    </div>
  </main>
</template>
