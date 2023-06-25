const dataObj = {
    address: '',
    phoneNumber: '',
    name: '',
    date: '',
    time: '',
    daycare: '',
    location: '',
    daycareContactNumber: '',
}

function DataObj() {
    this.dataObj;
}

const dayCareContacts = ['374-892-8748', '384-975-8374',
    '574-895-8758', '467-583-7467',
    '474-857-8478', '474-857-8488',
    '474-857-8499', '474-857-8455',
    '474-857-8455', '474-857-8448'];

    const loc = ['https://goo.gl/maps/3abYzh4gE7jh3Krt9', 'https://goo.gl/maps/1DwYACMKgC6ybDQd6',
    'https://goo.gl/maps/1DwYACMKgC6ybDQd6', 'https://goo.gl/maps/2ZnutkD8ZkpEUcaB8',
    'https://goo.gl/maps/p9BhrHNR6M4KWQVF8', 'https://goo.gl/maps/U6rHVy9TyRxnZs179"',
    'https://goo.gl/maps/7fAY8Ms6Xu5RprE99', 'https://goo.gl/maps/Q5xtDZSTN4KJka8w5',
    'https://goo.gl/maps/4E7CtCREELcNpg5n9"', 'https://goo.gl/maps/B8kV5Mbgb7qorqtw9'];

    const dayCareCon = ['Tried & True Dog Services', 'Bobs PetGo Mobile Grooming',
    'Precious Paws', 'Riverfront Pets',
    'silly dogs grooming services', 'Tried & True Dog Services',
    'Anitas Animal Antics', 'Pups Place',
    'Petco Grooming', 'PetSmart Grooming'];

let currentIndex = null;

const handleBookAppointment = (index) => {
    currentIndex = index;
}

function subForm() {
    const appointmentInfo = new DataObj;
    appointmentInfo.address = $('#address').val();
    appointmentInfo.phone = $('#phone').val();
    appointmentInfo.name = $('#name').val();
    appointmentInfo.date = $('#date').val();
    appointmentInfo.time = $('#time').val();
    appointmentInfo.daycare =  `${dayCareCon[currentIndex]}`;//`Daycare Center ${currentIndex + 1}`;
    appointmentInfo.location = `${loc[currentIndex]}`;//`Location ${currentIndex + 1}`;
    appointmentInfo.daycareContactNumber = `${dayCareContacts[currentIndex]}`;
    $.ajax({
        url: 'https://api.apispreadsheets.com/data/MKrQoMZk8cTc9T3o/', 
        type: 'post',
        data: JSON.stringify(appointmentInfo),
        success: function() {
            console.log("success");
        },
        error: function() {
            console.log("error");
        }
    });
}


