<template>

     <dl>
         <dt v-if="weatherData.temp != weatherData.temp_min">Current Temp</dt>
         <dd v-if="weatherData.temp != weatherData.temp_min">{{ weatherData.temp }}&deg;F</dd>
         <dt>Humidity</dt>
        <dd>{{weatherData.humidity }}%</dd>
        <dt>High</dt>
        <dd>{{weatherData.temp_max }}&deg;F</dd>
        <dt>Low</dt>
        <dd>{{weatherData.temp_min }}&deg;F</dd>
    </dl>
</template>

<script>
export default {

}
</script>

<style>

</style>

<div v-for="weatherSummary in weatherData" class="weatherSummary">
    <img v-bind:src="'http://openweathermap.org/img/w/' + weatherSummary.icon + '.png'" v-bind:alt="weatherSummary.main">
    <br>
    <b>{{ weatherSummary.main }}</b>
    </div>
      </div>
</template>

<script>

export default {
  name: 'WeatherData',
  data () {
    return {

    }
  },
props: {
    weatherData: {}
}
}
</script>

<style>
<style scoped>
  dl {
    padding: 5px;
    background: #e8e8e8;
  }
  dt {
    float: left;
    clear: left;
    width: 120px;
    text-align: right;
    font-weight: bold;
    color: blue;
  }
  dd {
    margin: 0 0 0 130px;
    padding: 0 0 0.5em 0;
  }
  dt::after {
    content: ":";
  }
</style>
<div v-for="weatherSummary in weatherData" class="weatherSummary">
    <img v-bind:src="'http://openweathermap.org/img/w/' + weatherSummary.icon + '.png'" v-bind:alt="weatherSummary.main">
    <br>
    <b>{{ weatherSummary.main }}</b>
    </div>
      </div>
</template>

<script>

export default {
  name: 'WeatherSummary',
  data () {
    return {

    }
  },
props: {
    weatherData: []
}
}
</script>

<style>

</style>