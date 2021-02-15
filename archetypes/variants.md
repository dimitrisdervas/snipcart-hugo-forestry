---
{{ range $i, $r := getCSV "," "https://docs.google.com/spreadsheets/d/e/2PACX-1vQEsr3o7tzW-ah5z84W6YP18a0oSeBr9n2ohIdd3BBPYCvgz0kIb73wus3z84eQVKdeQvE-GxwCBCLE/pub?gid=1180279757&single=true&output=csv" }} 
{{ if eq (getenv "HUGO_TITLE") (index $r 17) }}
products: "{{ index $r 4 }}"
handle: "{{ index $r 4 }}"
title: "{{ index $r 5 }}"
vendor: "{{ index $r 7 }}"
type: "{{ index $r 8 }}"
tags: "{{ index $r 9 }}"
published: "{{ index $r 10 }}"
option1_name: "{{ index $r 11 }}"
option1_value: "{{ index $r 12 }}"
option2_name: "{{ index $r 13 }}"
option2_value: "{{ index $r 14 }}"
option3_name: "{{ index $r 15 }}"
option3_value: "{{ index $r 16 }}"
variant_sku: "{{ index $r 17 }}"
variant_grams: "{{ index $r 18 }}"
variant_inventory_tracker: "{{ index $r 19 }}"
variant_inventory_qty: "{{ index $r 20 }}"
variant_inventory_policy: "{{ index $r 21 }}"
variant_fulfillment_service: "{{ index $r 22 }}"
variant_price: "{{ index $r 23 }}"
variant_compare_at_price: "{{ index $r 24 }}"
variant_requires_shipping: "{{ index $r 25 }}"
variant_taxable: "{{ index $r 26 }}"
variant_barcode: "{{ index $r 27 }}"
image_src: "{{ index $r 28 }}"
image_alt_text: "{{ index $r 29 }}"
gift_card: "{{ index $r 30 }}"
variant_image: "{{ index $r 46 }}"
variant_weight_unit: "{{ index $r 47 }}"
collections: [{{ index $r 48 }}]
gallery: [{{ index $r 49 }}]

---


{{ index $r 6 }}
{{ end }}
{{ end }}