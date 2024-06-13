document.addEventListener('DOMContentLoaded', () => {
    const content = [
        {
            id: 'history',
            title: 'Historical Context',
            paragraphs: [
                { text: '<strong>Ancient History:</strong>' },
                {
                    list: [
                        { text: '<strong>40,000 Years Ago:</strong> Early human habitation in Cambodia.' },
                        { text: '<strong>5,000-10,000 Years Ago:</strong> Arrival of early Khmer people in the Angkor area <a href="https://en.wikipedia.org/wiki/History_of_Cambodia" class="citation">[source]</a>.' },
                        { text: '<strong>3,000-4,000 Years Ago:</strong> Farming and metalwork, emergence of village settlements.' },
                        { text: '<strong>2,500 Years Ago:</strong> First known city, Angkor Borei, established.' },
                        { text: '<strong>2,000 Years Ago:</strong> Bunong people begin living in the Mondulkiri area.' }
                    ],
                      image: 'pu ngaol lake.jpg'
                },
                { text: '<strong>Middle Ages:</strong>' },
                {
                    list: [
                        { text: '<strong>100s-800s:</strong> Growth of Hindu-Buddhist kingdoms.' },
                        { text: '<strong>800s-1500s:</strong> Khmer Empire flourishes, Angkor Wat constructed <a href="https://whc.unesco.org/en/list/668" class="citation">[source]</a>.' }
                    ]
                },
                { text: '<strong>Colonial and Modern History:</strong>' },
                {
                    list: [
                        { text: '<strong>1700s:</strong> Vietnam conquers Mekong Delta <a href="https://www.newmandala.org/campaigns-criminalisation-and-concessions-indigenous-land-rights-in-cambodia/" class="citation">[source]</a>.' },
                        { text: '<strong>1863:</strong> French colonial rule begins.' },
                        { text: '<strong>1941-1953:</strong> Japanese occupation and Cambodian independence <a href="https://en.wikipedia.org/wiki/Japanese_occupation_of_Cambodia" class="citation">[source]</a>.' },
                        { text: '<strong>1965-1991:</strong> Vietnam War impact, Khmer Rouge regime, civil unrest <a href="https://en.wikipedia.org/wiki/Cambodian_Civil_War" class="citation">[source]</a>.' },
                        { text: '<strong>1993-Present:</strong> Establishment of constitutional monarchy and development challenges <a href="https://en.wikipedia.org/wiki/Modern_Cambodia" class="citation">[source]</a>.' }
                    ]
                }
            ]
        },
        {
            id: 'culture',
            title: 'Cultural Context',
            paragraphs: [
                { text: '<strong>Bunong Indigenous People:</strong>' },
                {
                    list: [
                        { text: '<strong>Lifestyle:</strong> Subsistence farming, reliance on forest and fields <a href="https://www.mondulkiriproject.org/blog/bunong/" class="citation">[source]</a>.' },
                        { text: '<strong>Spiritual Beliefs:</strong> Animism and ancestral worship, cultural ties to the forest <a href="https://www.mondulkiriproject.org/blog/bunong/" class="citation">[source]</a>.' },
                        { text: '<strong>Community Practices:</strong> Solidarity, support during agricultural cycles, significance of elephants <a href="https://www.mondulkiriproject.org/blog/bunong/" class="citation">[source]</a>.' },
                        { text: '<strong>Challenges:</strong> Threats from deforestation, economic development, and land commodification <a href="https://www.mondulkiriproject.org/blog/bunong/" class="citation">[source]</a>.' }
                    ]
                },
                { text: '<strong>Khmer Influence:</strong>' },
                {
                    list: [
                        { text: '<strong>Population:</strong> Presence of Khmer families in Pu Ngaol <a href="https://en.wikipedia.org/wiki/Demographics_of_Cambodia" class="citation">[source]</a>.' },
                        { text: '<strong>Religion:</strong> Predominantly Buddhism, influencing cultural practices and values <a href="https://en.wikipedia.org/wiki/Religion_in_Cambodia" class="citation">[source]</a>.' }
                    ]
                }
            ],
            image: 'pu ngaol desks.jpg'
        },
          
        {
            id: 'conclusion',
            title: 'Conclusion',
            paragraphs: [
                { text: 'Understanding the history and culture of Pu Ngaol is essential for developing solutions that are culturally sensitive and sustainable. The Bunong people’s deep connection to their land and traditions must guide the design and implementation of any project, ensuring that it enhances their way of life while addressing contemporary challenges.' },
                { text: 'By integrating these historical and cultural insights, your project can make a meaningful impact on the community in Pu Ngaol, supporting both technological innovation and cultural preservation.' }
            ],
            image: 'pu ngaol.jpg'
        }
    ];

    const contentDiv = document.getElementById('content');

    content.forEach(section => {
        const sectionDiv = document.createElement('section');
        sectionDiv.id = section.id;
        sectionDiv.className = 'section';

        const sectionTitle = document.createElement('h2');
        sectionTitle.innerHTML = section.title;
        sectionDiv.appendChild(sectionTitle);

        if (section.image) {
            const img = document.createElement('img');
            img.src = section.image;
            img.alt = section.title;
            img.className = 'main-image';
            sectionDiv.appendChild(img);
        }

        section.paragraphs.forEach(paragraph => {
            if (paragraph.text) {
                const p = document.createElement('p');
                p.innerHTML = paragraph.text;
                sectionDiv.appendChild(p);
            }
            if (paragraph.list) {
                const ul = document.createElement('ul');
                paragraph.list.forEach(item => {
                    const li = document.createElement('li');
                    li.innerHTML = item.text;
                    ul.appendChild(li);
                });
                sectionDiv.appendChild(ul);
            }
        });

        contentDiv.appendChild(sectionDiv);
    });
});
