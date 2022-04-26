import {
    intro_react, 
    react_fundamental,
    react_router_1,
    react_router_2,
    react_router_3,
    event_handling,
    react_hook,
    react_form,
    global_state,
 } from "./assets/img"

export const data = [
    {
        title: "Introduction React",
        path: "introduction_react",
        description: 
        `      React adalah library Javascript untuk membuat user interface (UI) yang interaktif dan cepat pada web maupun mobile. React bersifat open source dan hanya di maintain oleh facebook. Pada arsitektur MVC (Model View Controller), ReactJS hanya mengambil peran pada bagian view saja.React memiliki beberapa kelebihan antara lain:
        - Deklaratif
        - Berbasis komponen
        - Belajar sekali, dapat ditulis dimana saja
        - Sudah teruji
        - Populer

        Manipulasi DOM adalah inti dari web yang modern dan interaktif. Namun ada beberapa masalah yang ditimbulkan oleh manipulasi DOM yaitu manipulasi DOM secara manual dapat membuat kode berantakan, Sulit untuk mengingat DOM state sebelumnya, Jauh lebih lambat daripada operasi JS pada umumnya. Untuk mengatasi hal tersebut maka digunakan virtual DOM. Virtual DOM adalah representasi dari UI berbentuk Javascript Object yang disimpan di dalam memori.

        Task di section ini adalah belajar membuat sebuah project React baru. Setelah membuat projek baru, lalu disuruh membuat beberapa file Javascript baru dan memasukan file HTML ke dalamnya agar dapat ditampilkan dengan React.`,
        img: [intro_react]
    },
    {
        title: "React Fundamental",
        path: "react_fundamental",
        description: 
        `       JSX adalah singkatan dari Javascript XML yang merupakan ekstensi dari Javascript dan disarankan untuk digunakan pada React karena JSX memudahkan dalam menulis aplikasi React. Untuk menaruh ekspresi JS yang valid pada JSX dengan menggunakan kurung kurawal. Setelah dikompilasi, ekspresi JSX akan menjadi panggilan fungsi Javascript biasa dan menjadi objek Javascript

        Komponen pada React adalah bagian kode yang dapat digunakan kembali. Komponen digunakan untuk menentukan tampilan, behavior dan state dari sebagian UI. Komponen bisa digunakan untuk memecah sebuah UI menjadi bagian tersendiri dan bagian tersebut bisa digunakan kembali. Ada dua cara untuk membuat komponen pada React, dengan fungsi atau dengan class.
        
        Props adalah singkatan dari properties, membuat kita dapat memberikan argumen/data pada komponen. Props membantu untuk membuat komponen menjadi lebih dinamis. Props dioper ke component sama seperti memberikan atribut pada tag HTML. Props pada component adalah read-only dan tidak dapat diubah.
        
        React lifecycle adalah sederetan event yang terjadi dari awal komponen muncul sampai komponen itu menghilang dari aplikasi. Siklus komponen React dibagi 3 menjadi mounting, updating, dan unmounting.
        
        Task pada section ini adalah membuat sebuah aplikasi React sederhana dengan menerapkan materi yang sudah diajarkan pada section 11 ini. Aplikasi yang dibuat berupa To Do App sederhana yang akan menampilkan semua list kegiatan yang ada dan kemudian akan mencoret kegiatan tersebut jika properti completed bernilai true.`,
        img: [react_fundamental]
    },
    {
        title: "React Routing",
        path: "react_routing",
        description: 
        `       Router merupakan modul dalam React yang berfungsi untuk melakukan proses navigasi pada SPA (Single Page Application). Berbeda dengan MPA (Multi Page Application) yang disebut traditional wep app, di SPA hanya ada satu halaman saja yang menangani semua aktivitas yang terjadi di dalam aplikasi tersebut.
        
        SPA memiliki beberapa kelebihan yaitu Waktu loading website jauh lebih cepat, Tidak ada query tambahan ke server, Frontend yang cepat dan responsif, Meningkatkan user experience. Sedangkan untuk kelemahan SPA yaitu Tidak bagus dalam SEO, Berat saat di buka pertama kali, Kurang aman dibanding website biasa, Masalah kompatibilitas browser.
        
        Ada beberapa macam hook pada React Router yaitu:
        - useNavigate
        - useLocation
        - useParams

        Task pada section ini adalah membuat sebuah routing pada aplikasi dengan menggunakan tugas pada section React hook. Di section ini ditugaskan untuk membuat aplikasi menjadi 2 halaman yaitu halaman home dan about. Halaman about memiliki route lagi yaitu about-app dan about-author.`,
        img: [react_router_1, react_router_2, react_router_3]
    },
    {
        title: "Event Handling",
        path: "event_handling",
        description: 
        `       State adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain. Ada beberapa perbedaan antara props dan state. Props bersifat read only dan tidak dapat diubah, sedangkan state dapat diubah secara asinkron dan state bisa dimodifikasi menggunakan (this.setState) Berikut adalah beberapa hal mengenai state:
        - Data bisa dimodifikasi menggunakan setState
        - Setiap terjadi modifikasi akn terjadi render ulang
        - Bersifat asynchronous
        - Dipakai dalam class
        
        Stateful component adalah memiliki state. Component ini dibuat dengan class. Kelebihan dari class component adalah memiliki lifecycle. Stateless component adalah tidak memiliki state, hanya prop. Umumnya component ini dibuat dengan function karena kodenya lebih ringkas.
        
        Handling event adalah suatu metode untuk menangani sebuah event atau aksi yang diberikan pengguna kepada suatu component. Event adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen. Ada beberapa contoh list event:
        - Clipboard Events
        - Form Events
        - Mouse Events
        - Generic Events
        
        Task pada section ini adalah membuat sebuah aplikasi todolist sederhana. Aplikasi todolist ini bisa ditambahkan datanya dan juga dihapus. Selain itu ada sebuah checkbox yang jika diklik maka akan membuat teks nya menjadi tercoret.`,
        img: [event_handling]
    },
    {
        title: "React Hook",
        path: "react_hook",
        description: 
        `       Hooks merupakan fitur baru di React 16.8. Dengan hooks, kita dapat menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah class. Ada beberapa hal yang memotivasi untuk pembuatan fitur React hooks yaitu:
        - Kesulitan untuk menggunakan kembali stateful logic antar komponen
        - Komponen kompleks menjadi sulit untuk dimengerti
        - Class membingungkan manusia dan mesin
        
        Ada beberapa hooks built in dari React yang terdiri atas hooks dasar dan hooks tambahan. Hooks dasar seperti useState, useEffect, useContext. Hooks tambahan seperti useReducer, useCallback, useRef dan lain-lain. useState dipakai untuk dapat menggunakan state pada functional component sedangkan useEffect berfungsi mirip dengan lifecycle method pada class component.
        
        Ada beberapa aturan dalam menggunakan hook di React. Pertama yaitu hanya memanggil hooks di tingkat atas, jangan memanggil hooks dari dalam loop, condition, atau nested function. Kedua hanya memanggil hooks dari fungsi-fungsi React, jangan memanggil hooks dari fungsi-fungsi Javascript biasa melainkan dapat memanggil dari komponen-komponen fungsi React atau memanggil dari custom hooks.
        
        Task pada section ini berhubungan dengan task pada section sebelumnya. Task di section ini adalah mengubah source code dari tugas section Event Handling yang tadinya merupakan class component, menjadi functional component dengan menggunakan bantuan dari React Hook.`,
        img: [react_hook]
    },
    {
        title: "React Form",
        path: "react_form",
        description: 
        `       Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user. Form banyak dijumpai saat login, mendaftarkan sesuatu, memberikan feedback, mengisi data dan lain-lain. Pada HTML terdapat beberapa jenis form antara lain:
        - Input biasa
        - Text area
        - Combo box
        - Radio button
        - Checkbox
        
        Sebuah elemen masukan form yang nilainya dikontrol oleh React dengan cara menyimpan dan memperbarui melalui state ini disebut sebagai ”controlled component“. Dengan selalu melakukan render setiap kali terjadi perubahan state pada form maka sebuah component disebut sebagai controlled. Uncontrolled component adalah alternatif lain dari controlled component, dimana data form akan ditangani oleh DOM-nya sendiri. Component ini membutuhkan sebuah event seperti onSubmit agar dapat mendapatkan nilainya.
        
        Validasi adalah proses memastikan bahwa inputan yang dimasukkan, baik sebelum maupun setelah dikirim adalah benar dan formatnya sesuai. Validasi dapat dilakukan pada client-side dan server-side.

        Client-side validation adalah validasi yang dilakukan pada sisi client (browser). Validasi ini dilakukan agar data input sesuai dengan kebutuhan form, sebelum data form dikirimkan ke server. Server-side validation adalah validasi yang dilakukan pada sisi server. Sisi server bertugas untuk memvalidasi data kembali, sebelum disimpan di database. Jika ditemukan kesalahan, maka bisa mengirim respons kembali kepada client mengenai kesalahannya.
        
        Task pada section ini adalah membuat sebuah form sederhana dengan beberapa ketentuan yang diberikan. Form tersebut harus sudah dilengkapi dengan validasi untuk memastikan data yang masuk adalah sesuai dengan format yang seharusnya.`,
        img: [react_form]
    },
    {
        title: "Global State Management and Data Fetching",
        path: "global_state_and_data_fetching",
        description: 
        `       Global state management adalah proses pembuatan state yang dapat digunakan secara global oleh setiap komponen. Untuk melakukan global state management salah satunya adalah dengan menggunakan redux. Redux adalah tempat penyimpanan state untuk aplikasi JS. Redux baiknya digunakan saat:
        - Banyak state yang perlu ditaruh di banyak tempat
        - State pada aplikasi sering berubah
        - Logic untuk mengubah state kompleks
        - Ukuran code yang besar
        
        Redux terdiri atas 3 komponen utama yaitu action, reducer dan store. Action digunakan untuk memberikan informasi dari aplikasi kepada store. Reducer adalah fungsi JS yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state terbaru yang sudah dimodifikasi. Store adalah objek sentral/pusat yang menyimpan state aplikasi.
        
        Untuk menghubungkan store ke aplikasi React, digunakan komponen Provider yang diimport dari library react-redux. Provider nantinya akan membungkus aplikasi kita. Lalu Provider mengirim property store yang isinya adalah store dari redux. Untuk memakai dan mengubah state bisa dengan bantuan hooks yaitu useSelector dan useDispatch.
        
        Data fetching adalah proses permintaan sebuah data ke server, lalu server tersebut akan mengirim kembali data yang diminta. Ketika melakukan fetching data, kita akan menerima sebuah promise. Promise tersebut nanti bisa diterima menggunakan method then untuk menerima respon dan method catch untuk menerima error. Setelah menerima respon atau error barulah bisa diolah untuk ditampilkan pada aplikasi. Ada beberapa cara untuk melakukan fetching data di react yaitu:
        - Fetch API
        - Axios
        - React query library
        
        Tugas pada section ini adalah mengubah aplikasi yang sudah dibuat pada section react hooks. Aplikasi tersebut diubah untuk menggunakan redux dibanding menggunakan state pada komponen.`,
        img: [global_state]
    },
]