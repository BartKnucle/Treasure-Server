<template>
  <v-app>
    <v-app-bar
      fixed
      app
    >
      <funkysheep-logo
        src="/img/Logo-Head-Mini.png"
      />
      <v-toolbar-title
        v-if="$vuetify.breakpoint.name != 'xs'"
        v-text="title"
      />
      <v-spacer />
      <v-btn
        color="secondary"
        rounded
        to="/game"
      >
        <v-icon
          dark
          left
        >
          mdi-gamepad
        </v-icon>
        Game
      </v-btn>
      <funkysheep-menu-item
        v-for="(menu, i) in menus"
        :key="i"
        :menu="menu"
        :hidden="$vuetify.breakpoint.mobile"
      />
      <v-divider
        class="mx-4"
        vertical
        :hidden="$vuetify.breakpoint.mobile"
      />
      <funkysheep-login />
      <v-divider
        class="mx-4"
        vertical
        :hidden="$vuetify.breakpoint.mobile"
      />
      <funkysheep-social
        :hidden="$vuetify.breakpoint.mobile"
      />
      <div
        :hidden="!$vuetify.breakpoint.mobile"
      >
        <v-btn
          fab
          elevation="0"
          x-small
          color="primary"
          @click="mobileMenu = !mobileMenu"
        >
          <v-icon dark>
            mdi-menu
          </v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="mobileMenu"
      right
      temporary
      fixed
      @mouseout="showMobileMenu = false"
    >
      <v-list>
        <funkysheep-menu-mobile-item
          v-for="(menu, i) in menus"
          :key="i"
          :menu="menu"
        />
        <v-list-item>
          <funkysheep-social />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      color="primary"
      height="auto"
    >
      <v-layout
        justify-center
        align-center
      >
        <v-divider
          class="mx-2"
          vertical
        />
        Funky Sheep Studio &copy; {{ new Date().getFullYear() }}
        <v-divider
          class="mx-2"
          vertical
        />
        <funkysheep-social
          :hidden="$vuetify.breakpoint.mobile"
        />
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      drawer: false,
      fixed: false,
      menus: [
        {
          icon: 'mdi-chart-bubble',
          title: 'System',
          items: [
            {
              title: 'Services',
              to: '/system/services'
            },
            {
              title: 'Connections',
              to: '/system/connections'
            },
            {
              title: 'Users',
              to: '/system/users'
            },
            {
              title: 'Messages',
              to: '/system/messages'
            },
            {
              title: 'Quests',
              to: '/system/quests'
            },
            {
              title: 'Steps',
              to: '/system/steps'
            }
          ]
        }
      ],
      miniVariant: false,
      mobileMenu: false,
      title: 'Funky Sheep Studio Server'
    }
  },
  mounted () {}
}
</script>
