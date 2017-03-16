
    var arrayVariableHeader = [
      // 'Printer',
      // 'Waiter',
      // 'Table',
      'MenuCategory',
      // 'CategorySpecialRequest',
      'Ingredient',
      'KitchenLocation',
      'MenuItem',
      'ItemIngredient',
      'Customer',
      'Order',
      'OrderItem',
      // 'OrderItemAllergies',
      // 'ExtendedTable',
      'Notification',
      // 'Layout',
      // 'SessionLang',
      // 'sessionlang',
    ];


    var arrayVariable = [
      {name:'KitchenView', url:'/', tooltip:'', cat:'', icon:''},
      {name:'Order', url:'', tooltip:'', cat:'', icon:''},
      {name:'MenuItem', url:'', tooltip:'', cat:'', icon:''},

      {name:'MenuCategory', url:'', tooltip:'', cat:'', icon:''},
      {name:'Reports', url:'/report/', tooltip:'', cat:'', icon:''},
      {name:'CategorySpecialRequest', url:'', tooltip:'Manage special requests', cat:'', icon:''},

      {name:'Ingredient', url:'', tooltip:'', cat:'', icon:''},
      {name:'Table', url:'', tooltip:'', cat:'', icon:''},
      {name:'Waiter', url:'', tooltip:'', cat:'', icon:''},

      //{name:'ItemIngredient', url:'', tooltip:'', cat:'', icon:''},
      //{name:'OrderItem', url:'', tooltip:'', cat:'', icon:''},
      {name:'Discount', url:'', tooltip:'', cat:'', icon:''},
      {name:'Apps', url:'/admin/apps/', tooltip:'', cat:'', icon:''},
      {name:'Customer', url:'', tooltip:'', cat:'', icon:''},
      // 'OrderItemAllergies',
      //'ExtendedTable'
      {name:'Printer', url:'', tooltip:'Manage Printers', cat:'', icon:''},
      {name:'KitchenLocation', url:'', tooltip:'', cat:'', icon:''},
      {name:'Notification', url:'', tooltip:'', cat:'', icon:''},

      {name:'Layout', url:'', tooltip:'Update restaurant table layout', cat:'', icon:''},
      {name:'ThemeEditor', url:'/branding/', tooltip:'', cat:'', icon:''},
      {name:'Language', url:'', tooltip:'', cat:'', icon:''},

      {name:'Transaction', url:'', tooltip:'Manage and monitor warehouse transactions.', cat:'inv', icon:''},
      {name:'Item', url:'', tooltip:'Manage Inventory items.', cat:'inv', icon:''},
      {name:'Category', url:'', tooltip:'Manage inventory item categories', cat:'inv', icon:''},

      {name:'WarehouseLine', url:'', tooltip:'Manage warehouse item stocks', cat:'inv', icon:''},
      {name:'Warehouse', url:'', tooltip:'Manage warehouse(s)', cat:'inv', icon:''},
      {name:'UnitOfMeasure', url:'', tooltip:'Create unit of measure, Ex; Kilograms(kg)', cat:'inv', icon:''},
      
      {name:'UnitOfMeasureConversion', url:'', tooltip:'Manage conversions of 1 unit to another', cat:'inv', icon:''},


      // {name:'UnitOfMeasureType', url:'', tooltip:'Manage how you categorize measurement. Ex; weight, length or volume.', cat:'inv', icon:''},
      // {name:'ItemCustomInfo', url:'', tooltip:'Inventory item information', cat:'inv', icon:''},
      // {name:'ItemUnitOfMeasure', url:'', tooltip:'Unit of measure of an item.', cat:'inv', icon:''},
      // {name:'ItemComponent', url:'', tooltip:'Manage Item components to determine inventory status as detailed as possible.', cat:'inv', icon:''},
      // {name:'TransactionLine', url:'', tooltip:'Detailed view and management of transactions.', cat:'inv', icon:''},
      // 'UserManagement',
    ];



    var defaultOrg = "";
    defaultOrg += '<i class="fontdarkgray fa fa-sort-asc fa-stack-1x"></i>';
    defaultOrg += '<i class="fontdarkgray fa fa-sort-desc fa-stack-1x"></i>';


    var descOrg = "";
    descOrg += '<i class="fontgray fa fa-sort-asc fa-stack-1x"></i>';
    descOrg += '<i class="bluefont fa fa-sort-desc fa-stack-1x"></i>';

    var ascOrg = "";
    ascOrg += '<i class="bluefont fa fa-sort-asc fa-stack-1x"></i>';
    ascOrg += '<i class="fontgray fa fa-sort-desc fa-stack-1x"></i>';
