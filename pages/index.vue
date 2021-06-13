<template>
  <div>
    <button
      @click="incrementCounter"
    >
      Add person
    </button>
    <p>Persons list:</p>
    {{ persons }}
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, computed } from '@nuxtjs/composition-api';
import { getModule } from 'vuex-module-decorators'

import Example from "~/store/example";

export interface State {
  example: Example
}

export default defineComponent({
  setup(props) {
    const { store } = useContext();

    const example = getModule(Example, store);
    const persons = example.persons;

    function incrementCounter() {
      example.getPerson();
    }

    return {
      persons,
      incrementCounter
    }
  }
})

</script>

