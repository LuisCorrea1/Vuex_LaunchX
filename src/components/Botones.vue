<template>
    <div class="buttons">
      <!--Para mutaciones se usa commit para mandar llamar la información-->
      <button @click="$store.dispatch('bajarContador')">-</button>
      <button @click="$store.dispatch('subirContador')">+</button>
    </div>
</template>

<script>
export default {
    name: 'Botones',
}
</script>