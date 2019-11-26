<template>
  <div class="about">
 <b-container fluid class="bv-example-row">
  <b-row id="pertama">
    <b-col sm="9">
      Level 1: sm="9"
      <b-row>
        <b-col id="kedua" cols="8" sm="6">Level 2: cols="8" sm="6"</b-col>
        <b-col cols="4" sm="6" class="p-3 bg-info">Level 2: cols="4" sm="6"</b-col>
      </b-row>
    </b-col>
  </b-row>

  <b-row id="gambar_dua" class="text-center">
    <b-col>1 of 3</b-col>
    <b-col>2 of 3</b-col>
    <b-col>3 of 3</b-col>
    <b-col>3 of 3</b-col>
  </b-row>

  <b-row id="gambar_ketiga" class="text-center">
    <b-col>1 of 3</b-col>
    <b-col cols="8">2 of 3 (wider)</b-col>
    <b-col>3 of 3</b-col>
  </b-row>

  <div id="card">
<b-card-group columns>
  <b-card
    no-body
    style="max-width: 20rem;"
    img-src="https://placekitten.com/380/200"
    img-alt="Image"
    img-top
  >
    <template v-slot:header>
      <h4 class="mb-0">Hello World</h4>
    </template>

    <b-card-body>
      <b-card-title>Card Title</b-card-title>
      <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </b-card-text>
    </b-card-body>

    <b-list-group flush>
      <b-list-group-item>Cras justo odio</b-list-group-item>
      <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
      <b-list-group-item>Vestibulum at eros</b-list-group-item>
    </b-list-group>

    <b-card-body>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </b-card-body>

    <b-card-footer>This is a footer</b-card-footer>

    <b-card-img src="https://placekitten.com/480/210" alt="Image" bottom></b-card-img>
  </b-card>

  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Horizontal Card">
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</b-card-group>

<div class="mt-3">
    <b-card-group deck class="mb-3">
      <b-card border-variant="light" header="Light" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card border-variant="dark" header="Dark" align="center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
</div>


</b-container>
  </div>
</template>
<style scoped>
#pertama {
background-color: DodgerBlue;
}
#kedua {
  background-color: red ;
}
#gambar_dua{
  background-color: rgba(86,61,124,.15);
  padding-top: 43px;
  margin-top: 18px;
}
#gambar_ketiga{
  background-color: rgba(86,61,124,.15);
  padding-top: 43px;
  margin-top: 18px;
}

.col{
  top: -20px;
}

#card{
  padding-top: 43px;
  margin-top: 18px;
}
</style>