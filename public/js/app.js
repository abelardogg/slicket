(function($){
    'use strict'

    window.slicket = {};
    var slicket = window.slicket;

    var standardListItemForm = 
    `
    <hr class="d-md-none">
    <div class="row item-row">
        <div class="col-12 col-md-2 remove-item">
            <button type="button" class="btn btn-outline-danger btn-block">Remove</button>
        </div>
        <div class="col-12 col-md-5 form-group">
            <input type="text" class="form-control" placeholder="product (optional)">
        </div>
        
        <div class="col-8 col-md-3 form-group">
            <input type="number" class="form-control item-price" placeholder="price*">
        </div>
        
        <div class="col-4 col-md-2 form-group">
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">X</div>
                </div>
                <input type="number" class="form-control item-quantity" placeholder="quantity*">
            </div>
        </div>
    </div>
    `;

    $(document).ready(function(){
        $('#add-item').on('click', function(e){
           $('#shop-list').append($(standardListItemForm));
        });

        $('#calculate-total').on('click', function(){
            var $itemRows = $('.item-row');
            var tip = $('#tip-input').val();
            var total = slicket.items.calculateTotal($itemRows, tip);
            console.log('total: ' + total);
            $('#ticket-total').text(total);
        });
        
        $(document).on('click', '#shop-list .remove-item', function(e){
            $(this).parent('.item-row').remove();
         });
         
    });
    

    slicket.items = {
        calculateRowTotal: function(itemPrice, itemQuantity){
            return itemPrice*itemQuantity;
        },
        calculateItemsTotal: function($itemRows){
            var total = 0;
            var rowTotal = 0;
            var itemPrice = 0, itemQuantity = 0;
            for(var x = 0 ; x < $itemRows.length ; x++){
                itemPrice = $($itemRows[x]).find('.item-price').val();
                itemQuantity = $($itemRows[x]).find('.item-quantity').val();
                rowTotal = slicket.items.calculateRowTotal(itemPrice, itemQuantity);
                total += rowTotal;
            }
            return total;
        },
        calculateTip: function(itemsTotal, percentage){
            var tip = itemsTotal * (percentage/100);
            return tip;
        },
        calculateTotal: function($itemRows, tip){
            var subTotal = slicket.items.calculateItemsTotal($itemRows);
            var tip = slicket.items.calculateTip(subTotal, tip);
            var total = subTotal+tip;
            return total;
        }

    };


}(jQuery));

