<script setup>

</script>


<template>
  <div class="shadow rounded p-4">

    <div>
      <div>
        <img src="" alt="banner image">
      </div>
      <div class="d-flex justify-content-between">
        <div>
          <img src="" alt="user profile image" class="user-profile-img">
          <i class="mdi mdi-account-school icon-style"></i>
        </div>
        <div class="fs-1">
          <i class="mdi mdi-github mx-2"></i>
          <i class="mdi mdi-linkedin mx-2"></i>
          <i class="mdi mdi-account-box mx-2"></i>
        </div>
      </div>
    </div>
    <div>
      <h4 class="m-0">Summer 2018</h4>
      <h1 class="fw-bold">Bailey Richards</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo incidunt necessitatibus deleniti
        nisi,
        voluptates quia maiores cum sit similique? Quibusdam provident sunt nihil labore excepturi dolores debitis
        impedit
        laudantium!</p>
    </div>
    <div class="d-flex justify-content-end">
      <button class="rounded">Edit</button>
    </div>

  </div>
</template>


<style lang="scss" scoped>
.icon-style {
  height: 40px;
  width: 40px;
  font-size: xx-large;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  border-radius: 50%;
}

button {
  color: black;
  border: 1px solid black;
  width: 10%;
  font-weight: 600;
}

i {
  color: black;
}

.user-profile-img {
  height: 10dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
</style>