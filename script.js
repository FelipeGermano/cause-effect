const nameItems = document.querySelectorAll('.name-item');
const detailName = document.getElementById('detail-name');
const detailAddress = document.getElementById('detail-address');
const detailPhone = document.getElementById('detail-phone');
const detailDob = document.getElementById('detail-dob');

nameItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove selected class from all items
        nameItems.forEach(el => el.classList.remove('selected'));

        // Add selected class to clicked item
        item.classList.add('selected');

        // Update detail panel with the clicked item's data
        detailName.textContent = item.dataset.name;
        detailAddress.textContent = item.dataset.address;
        detailPhone.textContent = item.dataset.phone;
        detailDob.textContent = item.dataset.dob;
    });
});