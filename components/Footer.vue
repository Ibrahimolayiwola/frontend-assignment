<template>
  <div class="bg-[#ECEBF5] mt-[200px] py-16">
    <div
      class="max-w-[1243px] mx-auto flex justify-between  max-md:flex-wrap max-md:justify-center max-md:items-center gap-14 text-[302F2F] text-[18px]"
    >
      <div class="max-md:w-[320px]">
        <NuxtImg
          src="/images/logo.png"
          alt="Main intelliToggle logo"
          width="200"
          height="80"
          class="w-[170px] h-[50px]"
        />
        <p class="leading-auto">
          IntelliToggle is built by AORTEM, a company focused on powering
          scalable, multi-platform developer tools.
        </p>
      </div>
      <div class="flex gap-16 max-lg:flex-col">
        <div class="w-[380px] flex justify-between">
          <div>
            <p>Resources</p>
            <ul class="space-y-3 mt-4 font-semibold">
              <li>Why IntelliToggle is different</li>
              <li>Customer Support</li>
              <li>Terms & conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <p>Company</p>
            <ul class="space-y-3 font-semibold mt-4">
              <li>Pricing</li>
              <li>Documentation</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
        <div class="w-[320px]">
          <p class="font-semibold">Subscribe to Newsletter</p>
          <div class="w-full mt-8 flex justify-center items-center">
            <input type="email" placeholder="enter email address" class="p-3" />
            <button class="bg-[#F9A71E] px-8 py-3 font-bold">Join</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
