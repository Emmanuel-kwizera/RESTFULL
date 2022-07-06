import { Router } from 'express';
import { registerDefinition, registerSchema } from 'swaggiffy';
import { signup, signin, getProfile } from '../controllers/admin.controller';
import AuthMiddleware from '../middlewares/auth.middleware';

const router = Router();

router.post('/register', signup);
router.post('/signin', signin);
router.get('/profile', AuthMiddleware, getProfile);

const Auth = {
    names: '',
    email: '',
    phone: '',
    nationalId: '',
    password: ''
}
registerSchema('Auth', Auth);
registerDefinition(router, { tags: "Auth", mappedSchema: "Auth", basePath: "/api/auth" });
export default router;
