query GetList {
	getAffiliatesConfig{
		fields {
      name
      values {
        value
        text
      }
      defaultEmpty
      value
    }
    columns {
      name
      sortable
    }
    sortBy
    direction
	}
}


query GetAffiliatesTableData($formInput: FormTableInput, $paginationInput: PaginationInput) {
	getAffiliatesTableData(formInput: $formInput, paginationInput: $paginationInput) {
		rows {
      name
      value
    }
    total
	}
}

{
    "formInput": {
      "fields": [
        {
          "value": "123",
          "name": "affiliateId" 
        }
      ]
    },
    "paginationInput": {
      "limit": 250,
      "offset": 0,
      "sortBy": "ID",
      "direction": 1
    }
  }


