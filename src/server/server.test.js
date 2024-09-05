const request = require('supertest');
const server = require('./server'); // استيراد نسخة الخادم

describe('GET /', () => {
    // تشغيل الخادم قبل جميع الاختبارات
    beforeAll(() => {
        // يمكن وضع أي إعدادات أو تحضيرات هنا إذا لزم الأمر
    });

    // إغلاق الخادم بعد جميع الاختبارات
    afterAll(() => {
        server.close();
    });

    it('should respond with the index.html file', async () => {
        // إجراء طلب GET إلى الجذر
        const response = await request(server).get('/');

        // التحقق من حالة الاستجابة
        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toBe('text/html; charset=UTF-8');

    });
});
