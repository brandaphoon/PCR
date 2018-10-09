<template>
  <div class="requestForm">
    <form>
      <h2>REQUEST FORM DETAILS</h2>
      <hr/><br>
      <v-text-field
        v-validate="'required'"
        v-model="requestName"
        :error-messages="errors.collect('requestName')"
        label="Request Name"
        data-vv-name="requestName"
        outline
      ></v-text-field>
      <v-select
        v-validate="'required'"
        :items="networks"
        v-model="network"
        :error-messages="errors.collect('network')"
        label="Network"
        data-vv-name="network"
        outline
      ></v-select>
      <v-select
        v-validate="'required'"
        :items="systems"
        v-model="system"
        :error-messages="errors.collect('system')"
        label="System"
        data-vv-name="system"
        outline
      ></v-select>
      <v-textarea
        v-validate="'required'"
        v-model="reason"
        :error-messages="errors.collect('reason')"
        label="Business Reason"
        data-vv-name="reason"
        outline
      ></v-textarea>
      <v-select
        v-validate="'required'"
        :items="items"
        v-model="category"
        :error-messages="errors.collect('category')"
        label="Category"
        data-vv-name="category"
        outline
      ></v-select>
      <v-textarea
        v-validate="'required'"
        v-model="requestDetails"
        :error-messages="errors.collect('details')"
        label="Request Details"
        data-vv-name="details"
        outline
      ></v-textarea>
      <v-select
        v-validate="'required'"
        :items="taskee"
        v-model="task_to"
        :error-messages="errors.collect('task_to')"
        label="Task to"
        data-vv-name="task_to"
        outline
      ></v-select>
      <div class='datePicker'>
        <label for="startDate">Start Date:</label>
        <datepicker id="startDate" placeholder="Select Date" v-model="startDate"></datepicker>
        <br>
        <label for="reqDate">Required By:</label>
        <datepicker id="reqDate" placeholder="Select Date" v-model="requiredDate"></datepicker>
      </div>
      <div class='importance'>
        <label for="highbtn">High importance:</label>
        <v-btn id="highbtn" color="error" dark icon>
          <v-icon>error_outline</v-icon>
        </v-btn>
      </div>
      <div class='specify'>
        <label for="specifybtn">Specify Deployment Plan (Optional): </label>
        <v-btn id="specifybtn" round color="success" dark>Specify</v-btn>
      </div>
      <div class='attatchment'>
        <h2>ATTATCHMENT</h2>
        <hr/>
        <br>
        <label for="file-upload" class="custom-file-upload">
          Upload New File:
        </label>
        <input id="file-upload" type="file"/>
      </div>
      <div class='my_Details'>
        <h2>MY DETAILS</h2>
        <hr/>
        <br>
        <v-text-field
          v-validate="'required'"
          v-model="projName"
          :error-messages="errors.collect('projName')"
          label="Project/Activity Name"
          data-vv-name="projName"
          outline
        ></v-text-field>
        <v-select
          v-validate="'required'"
          :items="cpeople"
          v-model="PCP"
          :error-messages="errors.collect('PCP')"
          label="Project Contact Person"
          data-vv-name="PCP"
          outline
        ></v-select>
        <v-select
          v-validate="'required'"
          :items="sections"
          v-model="reqSec"
          :error-messages="errors.collect('reqSec')"
          label="Requestor Section"
          data-vv-name="reqSec"
          outline
        ></v-select>
        <h3>To be approved by:</h3>
      </div>
      <br>
      <v-btn @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import Datepicker from 'vuejs-datepicker/dist/vuejs-datepicker.esm.js'

Vue.use(VeeValidate)

export default {
  $_veeValidate: {
    validator: 'new'
  },

  data: () => ({
    requestName: '',
    network: null,
    system: null,
    reason: '',
    category: null,
    requestDetails: '',
    task_to: null,
    startDate: null,
    requiredDate: null,
    projName: '',
    PCP: null,
    reqSec: null,
    networks: [
      'OPTIMUS',
      'PRIME',
      'BUMBLE'
    ],
    systems: [
      'POP',
      'OCS',
      'ORD'
    ],
    categories: [
      'CAT',
      'DOG',
      'SNAKE'
    ],
    taskee: [
      'BOB',
      'BUILDER',
      'BEE'
    ],
    cpeople: [
      'ME',
      'I',
      'WE'
    ],
    sections: [
      'ITA',
      'STA',
      'PAT'
    ],
    checkbox: null,
    dictionary: {
      attributes: {
        requestName: 'request name',
        reason: 'business reason',
        details: 'request details',
        task_to: 'task to',
        reqSec: 'request section',
        projName: 'project name',
        PCP: 'project/activity name'
        // custom attributes
      }
      // custom: {
      //   name: {
      //     required: () => 'Name can not be empty'
      //     // custom messages
      //   }
      // }
    }
  }),

  mounted () {
    this.$validator.localize('en', this.dictionary)
  },
  components: {
    Datepicker
  },
  methods: {
    submit () {
      this.$validator.validateAll()
    },
    clear () {
      this.requestName = ''
      this.email = ''
      this.select = null
      this.checkbox = null
      this.$validator.reset()
    }
  }
}
</script>

<style>

.requestForm {
    margin: auto;
    width: 90%;
    padding: 10px 10px 10px;
}

.datePicker {
  background: #ffffff;
  border: 1.5px solid grey;
  border-radius: 10px;
  padding: 1.5em 1.5em 1.5em;
  margin-bottom: 2em;
  text-align: left;
}

#startDate, #reqDate {
  border: 1px solid grey;
  width: 30%;
  padding: 5px 5px 5px;
}

h2 {
  text-align: left;
}

</style>
