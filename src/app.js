document.addEventListener('alpine:init', () => {
    Alpine.data('menu', () => ({
        items: [
            {id: 1, name: 'Caramel Iced Coffee', img: '1.png', price: 20000},
            {id: 2, name: 'Black Coffee', img: '2.jpg', price: 13000},
            {id: 3, name: 'Cappuccino', img: '3.jpg', price: 16000},
            {id: 4, name: 'Latte Coffee', img: '4.jpg', price: 20000},
        ],
    }))

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            // Cari menu yang nama nya sama
            const cartItem = this.items.find((item) => item.id === newItem.id);

            // Jika tidak ada/ kosong
            if(!cartItem) {
                this.items.push({...newItem, quantity: 1, total: newItem.price });
                this.quantity++;
                this.total += newItem.price;
            }else{
                // jika udah ada, cek apakah sama menu tersebut
                this.item = this.items.map((item) => {
                    // Jika barang Beda
                    if( item.id !== newItem.id ) {
                        return item;
                    }else {
                        // jika menu sudah ada, tambah quantity dan totalny
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
            }

        },
        remove(id) {
            // ambil item yang ingin di remove berdasarkan id nya
            const cartItem = this.items.find((item) => item.id === id);

            // jika item lebih dari 1
            if(cartItem.quantity > 1) {
                // telusur
                this.items = this.items.map((item) => {
                    // jika bukan item yg di klik
                    if(item.id !== id) {
                        return item;
                    }else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                })
            } else if( cartItem.quantity === 1 ) {
                this.items = this.items.filter((item) => item.id != id);
                this.quantity--;
                this.total -= cartItem.price;
            }

        }
    });


});


// Konversi mata uang
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
}