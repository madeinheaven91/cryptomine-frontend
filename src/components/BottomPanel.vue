<template>
  <div class='flex flex-col gap-1 select-none'>
    <span class='border border-black border-2 px-2 bg-white bg-opacity-50 font-bold'>{{currentUser.username}}</span>
    <div id='userStatsField'></div>
        <div id="buttonPanel" class="grid grid-cols-4">
          <a href=""><img src="/icons/upgrades.png" draggable="false" class="select-none cursor-pointer rounded-xl border-2 border border-black opacity-50 hover:opacity-100"></a>
          <a href=""><img src="/icons/friends.png" draggable="false" class="select-none cursor-pointer rounded-xl border-2 border border-black opacity-50 hover:opacity-100"></a>
          <a href=""><img src="/icons/statistics.png" draggable="false" class="select-none cursor-pointer rounded-xl border-2 border border-black opacity-50 hover:opacity-100"></a>
          <a href=""><img src="/icons/settings.png" draggable="false" class="select-none cursor-pointer rounded-xl border-2 border border-black opacity-50 hover:opacity-100"></a>
        </div>
    </div>
</template>

<script setup lang="ts">
import currentUser from '../api/fetchUser'
</script>
