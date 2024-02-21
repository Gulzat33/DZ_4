// Загружаем файл persons.json
fetch('persons.json')
    .then(response => response.json())
    .then(data => {
        const charactersContainer = document.getElementById('characters');

        data.forEach(person => {
            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.src = person.person_photo;
            card.appendChild(img);

            const name = document.createElement('p');
            name.textContent = `Имя: ${person.name}`;
            card.appendChild(name);

            const age = document.createElement('p');
            age.textContent = `Возраст: ${person.age}`;
            card.appendChild(age);

            const occupation = document.createElement('p');
            occupation.textContent = `Профессия: ${person.occupation}`;
            card.appendChild(occupation);

            const city = document.createElement('p');
            city.textContent = `Город: ${person.city}`;
            card.appendChild(city);
            charactersContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Ошибка загрузки файла persons.json:', error));
