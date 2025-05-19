// HTMX 이벤트 핸들러
document.addEventListener('htmx:beforeRequest', function(evt) {
    // 요청 전에 로딩 인디케이터 표시
    const target = evt.detail.target;
    target.classList.add('loading');
});

document.addEventListener('htmx:afterRequest', function(evt) {
    // 요청 후 로딩 인디케이터 제거
    const target = evt.detail.target;
    target.classList.remove('loading');
});

document.addEventListener('htmx:responseError', function(evt) {
    // 에러 발생 시 에러 메시지 표시
    const target = evt.detail.target;
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = '요청 처리 중 오류가 발생했습니다.';
    target.appendChild(errorDiv);
});

// 유틸리티 함수들
const utils = {
    // 날짜 포맷팅
    formatDate: function(date) {
        return new Date(date).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },

    // 숫자 포맷팅
    formatNumber: function(number) {
        return new Intl.NumberFormat('ko-KR').format(number);
    },

    // 로컬 스토리지 관리
    storage: {
        set: function(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        },
        get: function(key) {
            const value = localStorage.getItem(key);
            try {
                return JSON.parse(value);
            } catch (e) {
                return value;
            }
        },
        remove: function(key) {
            localStorage.removeItem(key);
        }
    }
}; 