document.addEventListener('DOMContentLoaded', () => {
  // --- LOGIKA PENGALIH TEMA ---
  const themeToggle = document.getElementById('theme-toggle')
  const body = document.body
  const toggleContainer = document.querySelector('.toggle-container')
  const sunIcon = document.querySelector('.sun')
  const moonIcon = document.querySelector('.moon')
  const clouds = document.querySelector('.clouds')
  const stars = document.querySelector('.stars')

  const applyTheme = (theme) => {
    if (theme === 'light') {
      body.classList.remove('dark-theme')
      themeToggle.checked = false
      toggleContainer.style.backgroundColor = getComputedStyle(
        document.documentElement
      )
        .getPropertyValue('--toggle-bg-light')
        .trim()
      sunIcon.style.opacity = 1
      moonIcon.style.opacity = 0
      clouds.style.opacity = 1
      stars.style.opacity = 0
    } else {
      body.classList.add('dark-theme')
      themeToggle.checked = true
      toggleContainer.style.backgroundColor = getComputedStyle(
        document.documentElement
      )
        .getPropertyValue('--toggle-bg-dark')
        .trim()
      sunIcon.style.opacity = 0
      moonIcon.style.opacity = 1
      clouds.style.opacity = 0
      stars.style.opacity = 1
    }
  }

  const switchTheme = () => {
    const newTheme = themeToggle.checked ? 'dark' : 'light'
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  const savedTheme = localStorage.getItem('theme') || 'dark'
  applyTheme(savedTheme)
  themeToggle.addEventListener('change', switchTheme)

  // --- LOGIKA FILTER ---
  const cardTypes = [
    'followers',
    'following',
    'notFollowingBack',
    'notFollowedBack',
  ]

  const filterList = (type) => {
    const searchInput =
      document.getElementById(`${type}-search`)?.value.toLowerCase() || ''
    const lengthFilter =
      document.getElementById(`${type}-length`)?.value || 'all'
    const rangeFilter = document.getElementById(`${type}-range`)?.value || 'all' // Nilai default sudah benar 'all'

    const list = document.getElementById(`${type}-list`)
    if (!list) return // Keluar jika list tidak ditemukan

    const items = list.getElementsByTagName('li')
    const totalCounter = document.getElementById(`${type}-total`)
    let noResultsMessage = list.querySelector('.no-results-message')

    let visibleCount = 0

    Array.from(items).forEach((item) => {
      // Pastikan kita tidak memproses pesan "no results" sebagai item pengguna
      if (item.classList.contains('no-results-message')) return

      const username = item.textContent.toLowerCase().trim()
      const usernameLength = username.length
      const firstChar = username.charAt(0).toUpperCase()

      // 1. Cek Filter Pencarian Teks
      const searchMatch = searchInput === '' || username.includes(searchInput)

      // 2. Cek Filter Panjang Nama
      let lengthMatch = false
      switch (lengthFilter) {
        case '<5':
          lengthMatch = usernameLength < 5
          break
        case '5-10':
          lengthMatch = usernameLength >= 5 && usernameLength <= 10
          break
        case '>10':
          lengthMatch = usernameLength > 10
          break
        default: // 'all'
          lengthMatch = true
      }

      // 3. Cek Filter Rentang Abjad (INI BAGIAN YANG DIPERBAIKI)
      let rangeMatch = false
      if (rangeFilter === 'all') {
        // <-- KESALAHAN DI SINI, SEBELUMNYA 'A-Z'
        rangeMatch = true
      } else {
        const [start, end] = rangeFilter.split('-')
        rangeMatch = firstChar >= start && firstChar <= end
      }

      // Tampilkan item jika semua filter cocok
      if (searchMatch && lengthMatch && rangeMatch) {
        item.style.display = ''
        visibleCount++
      } else {
        item.style.display = 'none'
      }
    })

    // Hapus pesan "tidak ada hasil" yang mungkin sudah ada
    if (noResultsMessage) {
      noResultsMessage.remove()
    }

    // Tampilkan pesan jika tidak ada hasil yang cocok dengan filter
    if (visibleCount === 0 && items.length > 0) {
      noResultsMessage = document.createElement('li')
      noResultsMessage.className = 'no-results-message'
      noResultsMessage.textContent = 'No users match the current filters.'
      list.appendChild(noResultsMessage)
    }

    // Update UI berdasarkan hasil filter
    if (totalCounter) {
      const originalTotal =
        list.getAttribute('data-total-count') || items.length
      totalCounter.textContent = `Showing: ${visibleCount} of ${originalTotal} users`
    }
  }

  // Tambahkan event listener ke semua kontrol filter
  cardTypes.forEach((type) => {
    const searchInput = document.getElementById(`${type}-search`)
    if (searchInput) {
      const lengthSelect = document.getElementById(`${type}-length`)
      const rangeSelect = document.getElementById(`${type}-range`)
      const list = document.getElementById(`${type}-list`)

      // Simpan jumlah total asli untuk referensi
      const totalUsers = list.getElementsByTagName('li').length
      list.setAttribute('data-total-count', totalUsers)

      searchInput.addEventListener('input', () => filterList(type))
      lengthSelect.addEventListener('change', () => filterList(type))
      rangeSelect.addEventListener('change', () => filterList(type))

      // Inisialisasi filter saat halaman dimuat
      filterList(type)
    }
  })
})
