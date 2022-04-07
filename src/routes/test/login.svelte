
<div class="test">
  <section class="expanded-section">
    <form class="login-form">
        <div class="login-form-header">
          <h1>Zaloguj się</h1>
        </div>
        <div class="login-form-body">
          <div class="login-form-input">
            <label for="username">Nazwa użytkownika</label>
            <input type="text" id="username" name="username" placeholder="Nazwa użytkownika" />
          </div>
          <div class="login-form-input">
            <label for="password">Hasło</label>
            <input type="password" id="password" name="password" placeholder="Hasło" />
          </div>
          <div class="login-form-input">
            <button type="submit">Zaloguj</button>
          </div>
        </div>
      </form>
</section>
</div>
<style>
    .login-form {
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        background: var(--main-secondary);
        border-radius: 5px;
        color: var(--text);
    }
    .login-form-header {
        text-align: center;
    }
    .login-form-header h1 {
        font-size: 1.5em;
        margin: 0;
    }
    .login-form-body {
        padding: 20px;
    }
    .login-form-input {
        margin-bottom: 20px;
    }
    .login-form-input label {
        display: block;
        margin-bottom: 5px;
    }
    .login-form-input input {
        width: 100%;
        padding: 10px;
        background-color: var(--main);
        border: 1px solid var(--main);
        border-radius: 3px;
        color: var(--text);
    }
    .login-form-input input:focus {
        outline: none;
    }
    .login-form-input button {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 3px;
        background: var(--accent);
        color: #fff;
        cursor: pointer;
    }
</style>