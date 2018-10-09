<template>

<div class="page-wrap application application--light" data-app="true">
  <section class="content-main container block-group">
    <div class="content-main--inner">
      <div class="content--wrapper">
        <div class="content product--details">
<div id="nabei">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 sm9>
  <v-card class="grey lighten-4 elevation-0">
    <v-card-text>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs6>
            <v-subheader>Standard</v-subheader>
          </v-flex>
          <v-flex xs6>
            <v-select
              v-bind:items="items"
              v-model="e1"
              label="Select"
              single-line
              bottom
            ></v-select>
            <v-btn primary>Continue</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
              </v-flex>
            </v-layout>
          </v-container>
</div>
        <!-- shopware divs end -->
        </div>
      </div>
    </div>
  </section>
  </div>
</body>
</template>

<script>
export default {

  name: 'nabei',
  data () {
    return {
      e1: null,
      e2: null,
      e3: null,
      e4: null,
      items: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
        { text: 'State 5' },
        { text: 'State 6' },
        { text: 'State 7' }
      ]
    }
  }

}
</script>
