<script setup>

const QUERY = `
query MyQuery {
  allArticles {
    title
    logoimg {
      url
    }
  }
}
`;
const { data, error } = await useGraphqlQuery({ query: QUERY });
</script>

<template>
  <main>
    <Header :title="data.allArticles[0].title" :logoUrl="data.allArticles[0].logoimg.url"/>
  </main>
</template>
