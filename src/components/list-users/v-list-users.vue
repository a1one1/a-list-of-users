<template>
  <div id="list__users__container">
    <dx-data-grid
      id="dataGrid"
      :data-source="users"
      key-expr="EmployeeID"
      :allow-column-reordering="true"
      :column-auto-width="true"
      @selection-changed="selectEmployee"
    >
      <dx-column data-field="FullName" :fixed="true">
        <dx-required-rule />
      </dx-column>

      <dx-column data-field="Position">
        <dx-required-rule />
      </dx-column>

      <dx-column data-field="BirthDate" :width="100">
        <dx-required-rule />
      </dx-column>

      <dx-column data-field="HireDate" :width="100">
        <dx-required-rule />
      </dx-column>

      <dx-column data-field="City" />

      <dx-column data-field="Country" :group-index="0">
        <dx-required-rule />
      </dx-column>

      <dx-column data-field="Address" />

      <dx-column data-field="HomePhone" />

      <dx-column data-field="PostalCode" :visible="false" />

      <dx-column-chooser :enabled="true" />

      <dx-filter-row :visible="true" />

      <dx-search-panel :visible="true" />

      <dx-group-panel :visible="true" />

      <dx-editing
        mode="popup"
        :allow-updating="true"
        :allow-adding="true"
        :allow-deleting="true"
      />
    </dx-data-grid>

    <p id="selected-employee" v-if="selectedEmployee">
      Selected employee: {{ selectedEmployee.FullName }}
    </p>
  </div>
</template>

<script>
import {
  DxDataGrid,
  DxColumn,
  DxColumnFixing,
  DxColumnChooser,
  DxFilterRow,
  DxSearchPanel,
  DxGroupPanel,
  DxRequiredRule,
  DxEditing,
  DxSelection,
} from "devextreme-vue/data-grid";
import responce from "../../../responce";

export default {
  name: "v-list-users",
  components: {
    DxDataGrid,
    DxColumn,
    DxColumnFixing,
    DxColumnChooser,
    DxFilterRow,
    DxSearchPanel,
    DxGroupPanel,
    DxRequiredRule,
    DxEditing,
    DxSelection,
  },
  data() {
    return {
      users: null,
      selectedEmployee: null,
      items: [
        {
          id: "30202",
          name: "Mary",
          surname: "Jacobson",
          phone: "590-436-4488",
          address: "71141 Trantow Viaduct",
        },
        {
          id: "23123",
          name: "Rickey",
          surname: "Haley",
          phone: "518-327-7321 x39161",
          address: "610 Beer Plains",
        },
        {
          id: "23727",
          name: "Lauretta",
          surname: "Williamson",
          phone: "1-220-760-1160",
          address: "900 Sunny Corner",
        },
        {
          id: "28238",
          name: "Agustina",
          surname: "Waters",
          phone: "(787) 620-4599",
          address: "Runolfsdottir Stravenue",
        },
        {
          id: "39292",
          name: "Hunter",
          surname: "Larkin",
          phone: "(940) 924-4692 x9849",
          address: "16500 Doyle Wells",
        },
        {
          id: "38288",
          name: "Esta",
          surname: "Rodriguez",
          phone: "706-978-7880 x91363",
          address: "199 Aufderhar Mission",
        },
        {
          id: "82823",
          name: "Robyn",
          surname: "Harvey",
          phone: "731.478.1843",
          address: "4993 Valerie Tunnel",
        },
        {
          id: "23773",
          name: "Sid",
          surname: "Heller",
          phone: "1-472-867-7089",
          address: "35312 Mayer Divide",
        },
      ],
    };
  },
  created() {
    this.users = responce.getUsers().map((user) => {
      if (user.HireDate) {
        let data = new Date(user.HireDate);
        user.HireDate = this.dateConverter(data);
      }
      if (user.BirthDate) {
        let data = new Date(user.BirthDate);
        user.BirthDate = this.dateConverter(data);
      }
      return user;
    });
  },
  methods: {
    dateConverter(string) {
      let proof = new String();
      for (let char of string.toLocaleString("en", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      })) {
        if (char == ".") {
          proof = proof + "/";
        } else {
          proof = proof + char;
        }
      }
      return proof;
    },
    selectEmployee(e) {
      e.component.byKey(e.currentSelectedRowKeys[0]).done((employee) => {
        if (employee) {
          this.selectedEmployee = employee;
        }
      });
    },
  },
};
</script>

<style lang="scss">
#list__users__container {
  padding: 30px;
  position: relative;
}

#selected-employee {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
