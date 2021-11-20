<template>
  <Layout>
    <div id="fourohfour">
      <h1>4😰4</h1>
      <p>Hey buddy, you look a little lost.</p>
      <br>
      <a href="/" class="btn">Go Back Home</a>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "404"
    }
  }
}
</script>

<style scoped lang="scss">
#fourohfour {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100vw;
  height: calc(100vh - 72px);

  h1 {
    font-size: 150px;
    margin: 0;
  }
  p {
    margin-top: 0;
  }
}
</style>