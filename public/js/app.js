(function($){
    'use strict'

    window.slicket = {};
    var slicket = window.slicket;

    var standardListItemForm = 
    `
    <div class="col-12 row item-row">
    
        <div class="col-2 remove-item">
            <button type="button" class="btn btn-outline-danger">Remove</button>
        </div>

        <div class="col-5 form-group">
            <input type="text" class="form-control" placeholder="product (optional)">
        </div>
        
        <div class="col-3 form-group">
            <input type="number" class="form-control item-price" placeholder="price*" value="0.0">
        </div>
        
        <div class="col-2 form-group">
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">X</div>
                </div>
                <input type="number" class="form-control item-quantity" placeholder="quantity*" value="1">
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
            console.log(slicket.calculateTotal($itemRows));
        });
        
        $(document).on('click', '#shop-list .remove-item', function(e){
            $(this).parent('.item-row').remove();
         });
         
    });
    

    slicket = {
        calculateRowTotal: function(itemPrice, itemQuantity){
            return itemPrice*itemQuantity;
        },
        calculateTotal: function($itemRows){
            var total = 0;
            var rowTotal = 0;
            var itemPrice = 0, itemQuantity = 0;
            for(var x = 0 ; x < $itemRows.length ; x++){
                itemPrice = $($itemRows[x]).find('.item-price').val();
                itemQuantity = $($itemRows[x]).find('.item-quantity').val();
                rowTotal = slicket.calculateRowTotal(itemPrice, itemQuantity);
                total += rowTotal;
            }
            return total;
        }

    };


}(jQuery));

