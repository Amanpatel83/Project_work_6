{{#each product.options}}
  {{#if this.name "==" "Color"}}
    <div class="color-swatch">
      {{#each this.values}}
        <span class="swatch" style="background-color: {{this.value}};" data-value="{{this.value}}"></span>
      {{/each}}
    </div>
  {{/if}}
{{/each}}
