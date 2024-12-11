document.addEventListener('DOMContentLoaded', function () {
    let totalWaste = 0;
    const wasteTypes = {
        'Kağıt': 10,
        'Plastik': 5,
        'Metal': 15,
        'Cam': 12,
        'Elektronik Atık': 20,
        'Yağ': 30,
        'Pil': 25,
        'Tekstil': 8
    };

    const wasteCounterElement = document.getElementById('waste-counter');
    
    function updateWasteCounter() {
        wasteCounterElement.textContent = totalWaste + ' kg';
    }

    function addWaste(wasteType) {
        if (wasteTypes[wasteType]) {
            totalWaste += wasteTypes[wasteType];
            updateWasteCounter();
            alert(wasteType + ' atığı başarıyla eklendi!');
        }
    }

    const studentForm = document.getElementById('ogrenci-form');
    studentForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('student-name').value;
        const surname = document.getElementById('student-surname').value;
        const email = document.getElementById('student-email').value;
        const number = document.getElementById('student-number').value;

        console.log('Öğrenci Kaydı:', { name, surname, email, number });

        // Öğrenci kaydı başarılı olduğunda formu sıfırlayarak, kullanıcının kaydını göster
        alert(`${name} ${surname} başarıyla kaydedildi!`);
        studentForm.reset();
    });

    // Veri girişi için atık ekleme işlemi
    const wasteForm = document.getElementById('waste-form');
    wasteForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const wasteType = document.getElementById('waste-type').value;
        addWaste(wasteType);  // Atık türünü ekle
    });

    // Öğrenci bilgilerini görmek için 'Veri Görüntüle' butonunu işlevsel hale getirme
    const viewDataButton = document.getElementById('view-data-btn');
    viewDataButton.addEventListener('click', function () {
        // Öğrenciye ait veriler (geçici olarak örnek veriler kullanılıyor)
        const studentData = {
            name: 'Muhammedcan Arslanparçası',
            surname: 'Arslanparçası',
            totalWaste: totalWaste,
            credits: totalWaste * 10, // Basit bir kredi hesaplama örneği
            title: totalWaste > 100 ? 'YESİLSAVASÇI' : 'Geri Dönüşüm Savaşçısı'
        };

        alert(`
            Öğrenci Adı: ${studentData.name} ${studentData.surname}
            Toplam Atık: ${studentData.totalWaste} kg
            Kazanılan Kredi: ${studentData.credits} puan
            Unvan: ${studentData.title}
        `);
    });

    // Atık türlerini seçme kısmı için (daha fazla tür eklenebilir)
    const wasteTypeSelect = document.getElementById('waste-type');
    Object.keys(wasteTypes).forEach(function(type) {
        let option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        wasteTypeSelect.appendChild(option);
    });
});
