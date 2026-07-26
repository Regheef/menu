/* رغيف — menu data + interactions */
const NA = null;

function td(text, price=false, label){
  if (text === NA) return `<td class="na" ${label?`data-label="${label}"`:''}>—</td>`;
  return `<td class="${price?'price':''}" ${label?`data-label="${label}"`:''}>${text}</td>`;
}

function renderTable(mount, headers, rows){
  const theadCells = headers.map(h => `<th>${h}</th>`).join('');
  const bodyRows = rows.map(r => {
    const [name, ...vals] = r;
    const cells = vals.map((v,i) => td(v, i>0 || headers.length===2, headers[i])).join('');
    return `<tr><td>${name}</td>${cells}</tr>`;
  }).join('');
  mount.innerHTML = `<table class="menu-table">
    <thead><tr><th>الصنف</th>${theadCells}</tr></thead>
    <tbody>${bodyRows}</tbody>
  </table>`;
}

function renderSimple(mount, rows){
  mount.innerHTML = rows.map(([name,price]) =>
    `<div class="simple-row"><span>${name}</span><span class="price">${price}</span></div>`
  ).join('');
}

/* ---- data (matches the printed menu exactly: names, order, prices) ---- */
const foul = [
  ['فول محوج',15,15,30,50],
  ['فول زيت حار',17,19,35,55],
  ['فول اسكندراني',20,25,40,60],
  ['فول بالصلصة',18,25,40,60],
  ['فول بالزبدة',20,25,40,60],
  ['فول بالسمنة',20,25,40,60],
  ['فول ليمون معصفر',18,20,35,55],
  ['فول بالبيض المسلوق',25,27,42,65],
  ['فول أومليت (رغيف فقط)',30,NA,NA,NA],
  ['فول زيت زيتون',25,30,45,65],
  ['فول علي طعمية (رغيف فقط)',20,NA,NA,NA],
  ['فول علي بطاطس (رغيف فقط)',23,NA,NA,NA],
  ['فول سجق',40,45,60,75],
];

const taameya = [
  ['طعمية سادة',15,7],
  ['طعمية محشية',20,10],
  ['طعمية بليمون المعصفر',20,10],
  ['طعمية بالباذنجان (رغيف فقط)',20,NA],
  ['طعمية مسقعة (رغيف فقط)',22,NA],
  ['طعمية بالبيض (رغيف فقط)',25,NA],
  ['طعمية بصوص شيدر (رغيف فقط)',35,NA],
  ['طعمية موتزاريلا',35,28],
  ['طعمية بسطرمة',35,28],
  ['طعمية كيري',40,30],
  ['طعمية كيري بسطرمة',45,35],
];

const batates = [
  ['بطاطس محمرة',20,20,35],
  ['بطاطس شيبسي',20,20,35],
  ['بطاطس مهروسة',23,20,30],
  ['بطاطس محمرة كاتشب ومايونيز',25,25,40],
  ['بطاطس جميري',25,25,40],
  ['بطاطس محمرة جبنة شيدر',30,30,45],
  ['بطاطس محمرة جبنة رومي مبشورة (رغيف فقط)',30,NA,NA],
  ['بطاطس موتزاريلا (رغيف فقط)',30,NA,NA],
  ['بطاطس بابا غنوج (رغيف فقط)',22,NA,NA],
  ['بطاطس علي طعمية (رغيف فقط)',25,NA,NA],
  ['بطاطس محمرة باليبيض المسلوق (رغيف فقط)',35,NA,NA],
  ['بطاطس جميري كاتشب ومايونيز',30,30,45],
  ['بطاطس جميري بصوص الشيدر',35,35,50],
  ['بطاطس بانية',25,10,NA],
];

const beid = [
  ['بيض مسلوق',18,12],
  ['بيض أومليت سادة',25,20],
  ['بيض أومليت بسطرمة',35,28],
  ['بيض أومليت كبري',45,40],
  ['بيض أومليت بالجبنة الرومي',40,35],
  ['بيض أومليت بالجبنة الشيدر (رغيف فقط)',40,NA],
  ['بيض أومليت خضار',30,25],
  ['بيض أومليت مكس جبن',55,45],
  ['بيض أومليت مكس جبن بسطرمة',60,55],
  ['شكشوكة',55,25],
  ['بيض أومليت سجق',55,45],
];

const gebna = [
  ['جبنة بيضاء بالطماطم',20,20,30],
  ['جبنة رومي مقلية',45,40,NA],
];

const betengan = [
  ['باذنجان مقلي سادة',15,15,25],
  ['مسقعة',17,18,30],
  ['بابا غنوج',17,20,30],
];

const moqablat = [['مخلل','15 / 25'],['سلطة بلدي','15 / 25'],['ليمون معصفر','15 / 25'],['خيار مخلل','15 / 25']];
const soces   = [['طحينة',15],['كاتشب',15],['مايونيز',15],['شيدر',20]];
const edafat  = [
  ['إضافة زيت حار',2],['إضافة كاتشب',2.5],['إضافة مايونيز',2.5],['إضافة صوص شيدر',7],
  ['إضافة جبنة رومي مبشورة',7],['إضافة موتزاريلا مبشورة',7],['إضافة بابا غنوج',3],['إضافة باذنجان',5],
  ['إضافة بيض مسلوق',10],['إضافة بطاطس محمرة',10],['إضافة زيت زيتون',10],['إضافة بسطرمة',7],
  ['إضافة طعمية محشية',15],['إضافة أومليت',20],['إضافة كيري',20],
];
const bread  = [['شامي',3],['بلدي',2]];
const drinks = [['في كولا',25],['في سڤن',25],['مياه معدنية',15]];

document.addEventListener('DOMContentLoaded', () => {

  renderTable(document.getElementById('foul-list'), ['ساندوتش','صغيرة','وسط','كبيرة'], foul);
  renderTable(document.getElementById('taameya-list'), ['ساندوتش','قرص'], taameya);
  renderTable(document.getElementById('batates-list'), ['ساندوتش','صغيرة','كبيرة'], batates);
  renderTable(document.getElementById('beid-list'), ['ساندوتش','علبة'], beid);
  renderTable(document.getElementById('gebna-list'), ['ساندوتش','صغيرة','كبيرة'], gebna);
  renderTable(document.getElementById('betengan-list'), ['ساندوتش','صغيرة','كبيرة'], betengan);
  renderSimple(document.getElementById('moqablat-list'), moqablat);
  renderSimple(document.getElementById('soces-list'), soces);
  renderSimple(document.getElementById('edafat-list'), edafat);
  renderSimple(document.getElementById('3eesh-list'), bread);
  renderSimple(document.getElementById('mashrobat-list'), drinks);

  /* ---- splash ---- */
  const splash = document.getElementById('splash');
  window.addEventListener('load', () => setTimeout(() => splash.classList.add('hide'), 350));

  /* ---- sticky nav active state on scroll ---- */
  const sections = document.querySelectorAll('section.category');
  const tabLinks = document.querySelectorAll('nav.tabs a');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('in-view'); });
  }, { threshold: 0.08 });
  sections.forEach(s => revealObserver.observe(s));

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const id = entry.target.id;
        tabLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
      }
    });
  }, { rootMargin: '-110px 0px -70% 0px', threshold: 0 });
  sections.forEach(s => navObserver.observe(s));

  /* ---- search toggle + filter ---- */
  const searchToggle = document.getElementById('search-toggle');
  const searchPanel = document.getElementById('search-panel');
  const searchInput = document.getElementById('search-input');
  searchToggle.addEventListener('click', () => {
    searchPanel.classList.toggle('open');
    if (searchPanel.classList.contains('open')) setTimeout(() => searchInput.focus(), 200);
  });
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim();
    sections.forEach(sec => {
      let anyVisible = false;
      // table rows
      sec.querySelectorAll('table.menu-table tbody tr').forEach(row => {
        const name = row.children[0].textContent;
        const match = !q || name.includes(q);
        row.style.display = match ? '' : 'none';
        if (match) anyVisible = true;
      });
      // simple rows
      sec.querySelectorAll('.simple-row').forEach(row => {
        const name = row.children[0].textContent;
        const match = !q || name.includes(q);
        row.style.display = match ? '' : 'none';
        if (match) anyVisible = true;
      });
      sec.style.display = anyVisible ? '' : 'none';
    });
  });

  /* ---- back to top ---- */
  const topBtn = document.getElementById('top-btn');
  window.addEventListener('scroll', () => {
    topBtn.classList.toggle('show', window.scrollY > 500);
  });
  topBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top:0, behavior:'smooth' });
  });

  /* ---- service worker (PWA) ---- */
  if ('serviceWorker' in navigator){
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(()=>{});
    });
  }
});
